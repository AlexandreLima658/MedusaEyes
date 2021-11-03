import React, { useState } from 'react'
import configApi from '../services/configApi'

function FileUploadScreen(){
  const [multipleFile, setMultipleFiles] = useState('')  
  
  const MultipleFileChange = (e) => {
    setMultipleFiles(e.target.files)
  }
  
  
  const UploadMultipleFiles = async () =>{
    
    const formData = new FormData()
    console.log(multipleFile)
    
    for(let i=0; i<multipleFile.length; i++){
      formData.append('file',multipleFile[i])
    }
    await configApi(formData)
    
    }
  
    return (
        <div className="content">
        <div className="row mt-3">
          <div className="col-6">
            <div className="form-group">
                <label>Multiple files</label>
                <input type="file"
                 name="image"
                 accept="image/*" 
                 onChange={(e) => MultipleFileChange(e)} 
                 className="form-control"
                 multiple
                />
                
             </div>
            <div className="row">
              <div className="col-10">
                <button type="button" onClick={() => UploadMultipleFiles()}  className="btn btn-success">Enviar</button>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}

export default FileUploadScreen