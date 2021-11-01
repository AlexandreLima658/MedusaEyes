import React, { useState } from 'react'
import configApi from '../services/configApi'


function Teste(){
  const [multipleFiles, setMultipleFiles] = useState('')
  
  const multipleFileChange = (e) =>{
    setMultipleFiles(e.target.files)
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
      <div className="content">
        <div className="row mt-3">
          <div className="col-6">
            <div className="form-group">
                <label>Upload</label>
                <input type="file" accept="image/*" onChange={(e) => multipleFileChange(e)} className="form-control" multiple/>
            </div>
            <div className="row">
              <div className="col-10">
                  <button type="button" onClick={() => UploadMultipleFiles()} className="btn btn-success">Enviar</button>
              </div>
            </div>
          </div>
        </div>

      </div>
   
        
  )
}

export default Teste