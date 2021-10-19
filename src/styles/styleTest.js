import styled from 'styled-components'

export const Content = styled.div`
  input[type="file"]{
    display: none;
  }
 button{
    border:none;
    margin-top: 6vw;
    margin-left: 3vh;
    padding: 12px;
    cursor: pointer;
    border-radius: 6px;
    transition: .5s;
  }
  button:hover{
    background-color: orange;
    color: white;
  }

`
export const Preview = styled.div`
 img{ 
    width: 50px;
    height: 50px;
    border-radius: 5px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    margin-left: 1vw;
}
`
export const Lab = styled.label`
  background-color: #eee;
  padding: 18px;
  cursor: pointer;
  border-radius: 5px;
  


`