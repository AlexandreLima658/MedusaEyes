import React from 'react'
import { Container, FileInfo, Preview, Submit } from './styles';
import {CircularProgressbar} from 'react-circular-progressbar'
import { MdCheckCircle, MdError, MdLink } from "react-icons/md"
const FileList = ({files, onDelete}) => (
  <Container>
    {files.map(uploadedFile => (
      <li key={uploadedFile.id}>
      <FileInfo>
        <Preview src={uploadedFile.preview} />
        <div>
          <strong>{uploadedFile.name}</strong>
          <span>{uploadedFile.readbleSize}
            <button onClick={() => onDelete(uploadedFile.id)}>Excluir</button>
          </span>
        </div>
      </FileInfo>
      <div>
         {!uploadedFile.uploaded && !uploadedFile.error && (
           <CircularProgressbar styles={{
            root: { width: 20, marginBottom: 14 },
            path: { stroke: '#7159c1' }
            
          }}
          strokeWidth={10}
          percentage={uploadedFile.progress}
          />
          
         )}

          {uploadedFile.url &&(
            <a 
            href="#"
            target="_blanck"
            rel="noopener noreferrer"
          >
            <MdLink style={{ marginRight: 6}} size={24} color="#222"/>
          
          </a>
          
          )}
          
          {uploadedFile.uploaded && <MdCheckCircle size={24} color="#78e5d5"/>}
          {uploadedFile.error && <MdError size={24} color="#e57878 "/>}

      </div>
      
    </li>

    ))}
    
  </Container>
)

export default FileList
