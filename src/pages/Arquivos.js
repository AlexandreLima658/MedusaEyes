import React, {Component } from "react"
import GlobalStyle from "../styles/global"
import { Container, Content } from "../styles"
import { uniqueId } from "lodash"
import filesize from 'filesize'
import Upload from "../components/Upload"
import FileList from '../components/FileList'

import api from '../services/axios'


export default class Arquivos extends Component{
state = {
  uploadedFiles: []
};
async componentDidMount() {
  const response = await api.get("/posts");

  this.setState({
    uploadedFiles: response.data.map(file => ({
      id: file._id,
      name: file.name,
      readableSize: filesize(file.size),
      preview: file.url,
      uploaded: true,
      url: file.url
    }))
  });
}

handleUpload = files =>{
  const uploadedFiles = files.map(file =>({
    file,
    id: uniqueId(),
    name: file.name,
    readableSize: filesize(file.size),
    preview: URL.createObjectURL(file),
    progress:0,
    uploaded: false,
    error: false,
    url: null

  }))
  this.setState({
    uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles)
  })
  uploadedFiles.forEach(this.processUpload);
};
updateFile = (id, data) => {
  this.setState({
    uploadedFiles: this.state.uploadedFiles.map(uploadedFile => {
      return id === uploadedFile.id
        ? { ...uploadedFile, ...data }
        : uploadedFile;
    })
  });
};

processUpload = uploadedFile => {
  /* submite do form html em javaScript */
  const data = new FormData();

  /*file é o campo do banco de dados*/ 
  data.append("file", uploadedFile.file, uploadedFile.name);
  
  /* envia para url posts */
  api
  .post('/gerenciador-registro/upload', data, {
      onUploadProgress: e => {
        const progress = parseInt(Math.round((e.loaded * 100) / e.total));

        this.updateFile(uploadedFile.id, {
          progress
        });
      }
    })
    .then(response => {
      this.updateFile(uploadedFile.id, {
        uploaded: true,
        id: response.data._id,
        url: response.data.url
      });
    })
    .catch(() => {
      this.updateFile(uploadedFile.id, {
        error: true
      });
    });
};

handleDelete = async id => {
  await api.delete(`posts${id}`);

  this.setState({
    uploadedFiles: this.state.uploadedFiles.filter(file => file.id !== id)
  });
};

//componentWillUnmount() {
 // this.state.uploadedFiles.forEach(file => URL.revokveObjectURL(file.preview));
//}

  render(){
  const {uploadedFiles} = this.state;
  return(
  <div className='arquivos'>
    <h3>Upload</h3>
    <Container>
      <Content>
      <Upload onUpload={this.handleUpload}/>
        { !!uploadedFiles.length && (<FileList  files={uploadedFiles} onDelete={
          this.handleDelete
        }/>
        )}
      </Content>
     <GlobalStyle />
   
    </Container>
    
  </div>
  );
} 
}

