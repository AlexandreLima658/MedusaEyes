import styled from 'styled-components'

export const Content = styled.div`
  h3{
    color: #444;
    font-size: 24px;
    margin-top: 2vh;
    margin-right: 25vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
export const BotaoCancel = styled.button`
    margin: 8px;
    width: 80px;
    height: 30px;
    margin-left: 28vw;
    font-size: large;
    border: none;
    border-radius: 6px;
    cursor: pointer;
`
export const BotaoCheck = styled.button`
    margin: 8px;
    width: 80px;
    height: 30px;
    font-size: large;
    border: none;
    border-radius: 6px;
    cursor: pointer;
`

export const StyledTable = styled.table`
    font-size: 18px;
    padding: 2px;
    float: right;
    margin-right: 68vw;
    margin-top: -16vh;
    

    th, tr{
      border-bottom: 1px solid #ddd;
      padding: 8px;
      
    }

`