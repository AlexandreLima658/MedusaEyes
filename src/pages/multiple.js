import React, { useState } from 'react'
import axios from 'axios'

function FileUploadScreen(){
  const [multipleFile, setMultipleFiles] = useState('')  
 
  
  const MultipleFileChange = (e) => {
    setMultipleFiles(e.target.files)
  }
  //Conexão com o back-end
  const apiBase = 'http://localhost:3003'
  //conexão através do axios
  const multFiles = async (data) => {
      try {
        await axios.post(apiBase + '/gerenciador-registro/upload',data)
      } catch (error) {
        console.log(error)
      }
  }
  
  const UploadMultipleFiles = async () =>{
    
    const formData = new FormData()
    console.log(multipleFile)
    
    for(let i=0; i<multipleFile.length; i++){
      formData.append('file',multipleFile[i])
    }
    await multFiles(formData)
    
    }
  
  
  
  
  return (
        <div className="content">
        <div className="row mt-3">
          <div className="col-6">
            <div className="form-group">
                <label>Multiple files</label>
                <input type="file" name="image" accept="image/*" onChange={(e) => MultipleFileChange(e)} className="form-control"  multiple/>
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