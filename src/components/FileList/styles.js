import styled from "styled-components";

export const Container = styled.ul`
    margin-top: 20px;

    li{
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #444;
    
      & + li{
         margin-top: 0px;
         
      }
    }
`;

export const FileInfo = styled.div`
  display: flex;
  align-items: center;

  div{
    display: flex;
    flex-direction: column;

    span{
      font-size: 14px;
      color:#999;
      margin-top: 8px;
      margin-left: 0;

      button{
        border: 0;
        background: transparent;
        color: #e57878;
        margin-left: 12px;
        cursor: pointer;
      }
    }
  }
`;

export const Preview  =  styled.div`
  width: 36px;
  height: 36px;
  border-radius: 5px;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  margin-right: 10px;

`;
export const Submit = styled.button`
   background-color: #2c5288;
   cursor: pointer;
   border: none;
   color: white;
   margin: 15px 0 25px;
   border-radius: 4px;
   box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
   
   padding: 12px;

`