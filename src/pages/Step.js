import React from 'react'
import * as FcIcons from 'react-icons/fc'

import {Container } from '../styles'
import {Content, BotaoCancel, BotaoCheck} from '../styles/styleStep'

export default function step() {
  return (
    
    <div className="step">
      <Container>
        <Content>
       
        <h2>Upload</h2> 
        <h3>Deseja realmente fazer o upload de imagens ?</h3>
        
        <BotaoCancel onClick={() => {
          alert("Navegue nas outras opções")
        }}>
          <FcIcons.FcCancel />
        </BotaoCancel>
        <BotaoCheck onClick={() =>{
          window.location.href="Arquivos"
        }}>
          <FcIcons.FcCheckmark/>
        </BotaoCheck>
        </Content>
      
      </Container>
    </div>
  
  )
}
