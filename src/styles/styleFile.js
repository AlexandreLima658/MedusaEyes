import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  place-items: center;
 

  
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24vh;
  background-color: #fff;
  padding: 36px 48px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 20px;
  text-align: center;

  p{
    margin-top: -10px;
    color: #777;

  }
`
export const BoxUpload = styled.div`
  display: grid;
  margin-top: 0px;
  place-items: center;
  border: 1px dashed #799CD9;
  padding: 24px 10px 8px 0px;
  background: #FBFBFF;
  border-radius: 10px;

  .img-upload{
    display: flex;
    flex-wrap: wrap;
    
    label{
      cursor: pointer;
      
      
    }
    input[type=file]{
      display: none;
    }
    
  }

`

export const ImagePreview = styled.div`
  position: relative;
  //cursor: pointer;

  #uploaded-image{
      width: 150px;
      height: 150px;
      object-fit: cover;
      border-radius: 20px;

    }

  .close-icon{
    position: absolute;
    z-index: 5;
    right: 10px;
    top: 10px;
    width: 20px;
    height: 20px;
    background-color:#fff;
    border-radius: 10px ;
    cursor: pointer;
    
    :hover{
        opacity: .8;
      }
  }
  
  
`
