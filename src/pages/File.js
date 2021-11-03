import React, {useState} from "react";
import { Layout, Container, BoxUpload, ImagePreview } from "../styles/styleFile";
import img from '../assets/folder.png'
import CloseIcon from '../assets/close.svg'
import configApi from '../services/configApi'
function File(){

  const [image, setImage] = useState('')
  const [isUpload, setIsUpload] = useState(false)
  const [multipleFiles, setMulpleFiles]= useState('')
  const [imageSelect, setSelectImage] = useState('')
  const imageChange = (e) => {
    setMulpleFiles(e.target.files)  
    if(e.target.files){
      const reader = new FileReader()

      reader.onload = function(e){
          setImage(e.target.result)
          setIsUpload(true)
      }
      
      reader.readAsDataURL(e.target.files[0])
  }
}
  
  
  
  const UploadMultipleFiles = async() =>{
    const formData = new FormData()
    console.log(multipleFiles)
    for(let i=0; i< multipleFiles.length; i++){
      formData.append('file', multipleFiles[i])
    }
    await configApi(formData)
  }

  return(
    <Layout>
        <Container>
          <h3>Upload de imagens</h3>
          <p>upload preview 😁</p>

          <BoxUpload>
            <div className="img-upload">
              {
                !isUpload ? (
                   <>
                   <label htmlFor="upload-input">
                <img src={img} draggable={'false'} alt="placeholder" style={{width: 60, height: 60}} />
                <p style={{color: '#444'}}>
                  Click para fazer o upload
                </p>
              </label>
              <input 
              type="file" 
              id="upload-input" 
              accept="image/*"
              multiple
              onChange={imageChange}
              />
              
                </> 
                
                  
                ) : (
                  
                 <ImagePreview> 
                  
                  <img  className="close-icon" src={CloseIcon} alt="CloseIcon" onClick={() =>{setIsUpload(false)} }/>
                  <img id="uploaded-image" src={image} alt="uploaded-img" />
                  
                </ImagePreview>
                )
              }
              
            </div>
            
          </BoxUpload>
          
          <button style={{margin: 20}}
          className="btn btn-primary"
          onClick={(e)=> {UploadMultipleFiles(e)}}
          > Enviar</button>
         </Container>
    </Layout>
         
    
  )
}

export default File