import React from 'react'
import {StyledTable} from '../styles/styleStep'
import * as FaIcons from 'react-icons/fa'


export default function Analise() {
  return (
    <div className="analise">
      <h3>Análises</h3>
      <StyledTable>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Status</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>12</th>
            <th>Solicitado</th>
            <th><FaIcons.FaPlus/></th>
          </tr>
          <tr>
            <th>14</th>
            <th>Solicitando</th>
            <th><FaIcons.FaPlus/></th>
          </tr>
        </tbody>
      </table>
      </StyledTable>
    </div>
  )
}
