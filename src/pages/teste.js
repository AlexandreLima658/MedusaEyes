import React, {useState,useCallback } from 'react'
import configApi from '../services/configApi'
import {useDropzone} from 'react-dropzone'
function MultipleUploadFiles(){
  
  const [multipleFiles, setMultipleFiles] = useState([])
  const [selectImage, setSelectImage] = useState([])

  
   const imageChange  = (e) =>{
    const file = e.target.files 
    setMultipleFiles(file)
    
    }
    
    const [isSelect,setIsSelect] = useState('')
    const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) =>{
      const son = document.createElement('img')

        const reader = new FileReader()

        reader.onabort = () => console.log('file reading')
        reader.onerror = () => console.log('file reading abort')

        reader.onload = () =>{
          const binary = reader.result
          son.src = binary
          console.log(son)
          document.body.appendChild(son)
          console.log(file.path)

        }
        reader.readAsDataURL(file)
      })
    },[false]
  )
  const {getRootProps, getInputProps} = useDropzone({onDrop})
  
  
      
  
   const UploadMultipleFiles = async() =>{
    const formData = new FormData()
    console.log(multipleFiles)
    for(let i=0; i< multipleFiles.length; i++){
      formData.append('file', multipleFiles[i])
    }
    await configApi(formData)
    //alert('Arquivo(s) enviado(s) com sucesso 😁')
    
  }
   

  return(
    <div className="form-group">
    <div {...getRootProps()}>
      <input
      onChange={imageChange}
      {...getInputProps()} 
      />
      <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
    

    <div>
      <button onClick={() => UploadMultipleFiles()}>Enviar</button>
    </div>
    </div>
  )


}
export default MultipleUploadFiles