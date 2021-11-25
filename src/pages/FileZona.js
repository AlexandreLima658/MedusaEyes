import React, { useEffect, useState, useMemo } from 'react'
import { useDropzone } from 'react-dropzone'
import configApi from '../services/configApi'

function Basic(props) {
  const [files, setFiles] = useState([])

  const { getInputProps, getRootProps } =
    useDropzone({
      accept: 'image/*',
      onDrop: acceptedFiles => {
        setFiles(files =>
          [...files, ...acceptedFiles.map(file =>
            Object.assign(file, {
              preview: URL.createObjectURL(file)
            })
          )]
        )
      },
    })

  useEffect(
    //Quando o componente não for mais renderizado, revogue as URLs criadas
    () => () => {
      files.forEach(file => URL.revokeObjectURL(file.preview))
    },
    [files]
  )

  const acceptedFilesItems = useMemo(() => files?.map((file, i) => (
    <div key={file.name}>
      <div className="fileItems">
        <img src={file.preview} />
        <li key={file.path}>{file.path}</li>
        <i>
          <button className="btn btn-danger" onClick={() => remove(i)}>
            Excluir
          </button>
        </i>
      </div>
    </div>
  )), [files])

  const remove = file => {
    // acceptedFiles.splice(file, 1)
    setFiles(files => {
      const aux = [...files]
      aux.splice(file, 1)
      return aux;
    })
  }

  const UploadMultipleFiles = async () => {
    const formData = new FormData()

    for (const file of files) {
      formData.append('file', file)
    }
    alert("Arquivo(s) enviado(s) com sucesso!")
    await configApi(formData)
  }

  return (
    <div className="container">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input type="file" multiple  {...getInputProps()} />
        <p>Arraste ou click aqui!</p>
      </div>

      <div className="files">
        {acceptedFilesItems}
        <button
          type="button"
          onClick={() => UploadMultipleFiles()}
          className="btn btn-success"
        >
          Enviar
        </button>
      </div>
    </div>
  )
}

export default Basic