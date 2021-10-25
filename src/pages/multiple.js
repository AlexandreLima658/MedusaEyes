import React, { useState } from 'react'
import api from '../services/configTest'


function FileUploadScreen(){
  const [multipleFile, setMultipleFiles] = useState('')  
  
  const MultipleFileChange = (e) => {
    setMultipleFiles(e.target.files)
  }
  
  const UploadMultipleFiles = async () =>{
    const data = new FormData()
    data.append('files',multipleFile)
    const headers ={
      'headers':{
        'Content-Type': 'application/json'
      }
    }
    await api.post('/gerenciador-img/upload',data, headers)
      .then((response) =>{
        console.log(response)
      }).catch((err) =>{
        
         
        
      })
  }
  
  
  
  return (
        <div className="content">
        <div className="row mt-3">
          <div className="col-6">
            <div className="form-group">
                <label>Multiple files</label>
                <input type="file" onChange={(e) => MultipleFileChange(e)} className="form-control"  multiple/>
            </div>
            <div className="row">
              <div className="col-10">
                <button type="button" onClick={() => UploadMultipleFiles()}  className="btn btn-success">Upload</button>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}

export default FileUploadScreen