import React, { useState } from 'react'
import configApi from '../services/configApi'


function Teste(){
  
  const [multipleFiles, setMultipleFiles] = useState('')
  const [selectImage, setSelectImage] = useState([])
  
  const imageChange  = (e) =>{
    console.log(e.target.files)
    setMultipleFiles(e.target.files)
    if(e.target.files){
      const fileArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file))
      console.log(fileArray)
      setSelectImage((prevImage) => prevImage.concat(fileArray))
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file)
      )
      
      
    }
   

  }
  //Preview
  const renderImage = (source) =>{
      return source.map((photo)=>{
        return <img  src={photo} key={photo}/>
      })

  }
  /*
  const multipleFileChange = (e) =>{
      setMultipleFiles(e.target.files)
  }
  */
  const UploadMultipleFiles = async() =>{
    const formData = new FormData()
    console.log(multipleFiles)
    for(let i=0; i< multipleFiles.length; i++){
      formData.append('file', multipleFiles[i])
    }
    await configApi(formData)
  }

 return( 
      <div className="content">
        <div className="row mt-3">
          <div className="col-6">
            <div className="form-group">
                <label>Upload</label>
                <input 
                type="file"
                id="file"
                accept="image/*" 
                onChange={(e) => {imageChange(e)}}
                className="form-control"
                multiple
                
                />
              </div>
              {renderImage(selectImage)}
             
                
            <div className="row">
              <div className="col-10">
                  <button type="button" onClick={() => UploadMultipleFiles()} className="btn btn-primary">Enviar</button>
              </div>
            </div>
          </div>
        </div>

      </div>
   
        
  )
}

export default Teste