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