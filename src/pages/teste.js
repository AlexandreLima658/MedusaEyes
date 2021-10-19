import React, { useState } from 'react'
import api from '../services/configApi'


function Teste(){
  const [singleFile, setSingleFile] = useState('')
  const [status, setStatus] = useState({
    type:'',
    mensagem:''
  })
  
  const singleFileChange = (e) => {
      setSingleFile(e.target.files[0])
     
  }
  const uploadImage = async e => {
    e.preventDefault()
      
      const formData = new FormData()
      formData.append('file', singleFile)
      
      const headers = {
        'headers':{
          'Content-Type': 'application/json'
        }
      }
     await api.post("/gerenciador-img/upload", formData, headers)
      .then((response) =>{
        console.log(response)
        setStatus({
          type:'success',
          mensagem: response.data.mensagem
        })
      
      }).catch((err) =>{
        if(err.response){
          console.log(err.response)
          setStatus({
            type:'err',
            mensagem: err.response.data.mensagem
          })
        }else{  
          setStatus({
            type:'error',
            mensagem: 'Erro: Tente mais tarde!'
          })
        }
      })
  }
 
  return( 
      <div className="content">
        <div className="row mt-3">
          <div className="col-6">
            <div className="form-group">
                <label>Upload</label>
                <input type="file" onChange={(e) => singleFileChange(e)} className="form-control"/>
            </div>
            <div className="row">
              <div className="col-10">
                  <button type="button" onClick={(e) => uploadImage(e)} className="btn btn-success">Enviar</button>
              </div>
            </div>
          </div>
        </div>

      </div>
   
        
  )
}

export default Teste