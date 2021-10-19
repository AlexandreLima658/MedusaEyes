import React from 'react'
//import {StyledTable} from '../styles/styleStep'
//import * as FaIcons from 'react-icons/fa'


export default function Analise() {
  return (
    <div className="analise">
      <h3>Análises</h3>
        
      <section>
        <form action="" >
          <div className="input-container">
            <label >Id</label>
            <input className="inp1" type="number"  required/>
            <label>Status</label>
            <input  className ="inp2" type="text" required/>
          </div>
            
            
        </form>
      </section>

    </div>
  )
}
