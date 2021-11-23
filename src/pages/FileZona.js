
import React,{useEffect,useState} from 'react';
import {useDropzone} from 'react-dropzone';
import configApi from '../services/configApi'


function Basic(props) {
   const [files, setFiles] = useState([])
   const [multipleFiles, setMultiplesFiles] = useState([])
  
   const {
      getInputProps,
      getRootProps,
      onChange,
      acceptedFiles,
      isDragActive,
      
      
    } = useDropzone({
      accept: 'image/*',
      onDrop: acceptedFiles =>{
          setFiles(acceptedFiles.map(file => Object.assign(file,{
            preview: URL.createObjectURL(file)
            
         }))) 
        
        }
      
    })
    
    
    
    const acceptedFileItems = acceptedFiles.map((file,i) => (
      <div key={file.name}>
        <div className="fileItems">
          <img src={file.preview} />
            <li key={file.path}>{file.path}</li>
            <i><button onClick={() => remove(i)} className="btn btn-danger">Excluir</button></i>
         </div>
      </div>
    ));

   
  
   useEffect(() => () =>{
      files.forEach(file => URL.revokeObjectURL(file.preview))
   }, [files])
    
   const remove = file =>{
    const newFiles = [...files]
    acceptedFiles.splice(file,1)
    setFiles(newFiles)
  }
  
    
    const UploadMultipleFiles = async() =>{
      const formData = new FormData()
      
      console.log("Não entrei")
      
      for(let i=0; i < multipleFiles.length; i++){
        formData.append('file', multipleFiles[i])
        console.log("Entrei")
        console.log('Files: ',multipleFiles[i])
      }
      await configApi(formData)
      
      
    }
    const Change = e =>{
      setMultiplesFiles(e.target.files)
      console.log("multipleFiles")
    }
   
  return (
    <div className="container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input 
        type="file"
        multiple
        onChange={Change}
        {...getInputProps()}
         />
        <p>Arraste ou click aqui!</p>
        
      </div>
             
      <div className="files">
        
        {acceptedFileItems}
       
        <button type="button"
          
          onClick={() => UploadMultipleFiles()}
         className="btn btn-success">Enviar</button>
  
          
         
       </div>
    </div>
  );
}


export default Basic

