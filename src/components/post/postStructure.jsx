import styled from "styled-components";
import { theme } from "../../theme.js";

// COMPONENTS
import CustomHr from '../reaproveitarComponents/divisorHr.jsx'
import Loading from '../reaproveitarComponents/loadingIcon.jsx'
  
const PostagemPrincipal = styled.div`
  font-family: sans-serif;
  background-color: ${theme.backgroundColor1} ;
  width: 90%;
  height: auto;
  margin-top: 30px;
  border-radius: 10px;

  opacity: 0.4;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19);
`

const MainPostagemPrincipal = styled.div`
  display: flex;
  flex-direction: row;

  padding-bottom: 16px;
  width: 100%;
  height: auto;
  
  @media(max-aspect-ratio: 8/7){
    flex-direction: column;
    align-items:center;
  }
`

const ImageWrapper = styled.div`
  flex-shrink: 0.8;
  width: 45%;
  height: 60vh;
  margin: 0px;
  margin-top: 5px;
  
  background-color: ${theme.textColor3+'44'};
  @media(max-aspect-ratio: 8/7){
    height: 40vh;
    width: 100%;
  }
`
const Icon = styled.div` 
  z-index:1;
  position: relative;
  top: 150px;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media(max-aspect-ratio: 8/7){
    height: 15vh;
    width: 100%;
  }
`

export default function Postagem(props) {

  return(
    <>
      <Icon>
        <Loading/>
      </Icon> 
      <PostagemPrincipal>
        <div style={{height: '70px'}}/>
        <CustomHr/>

        <MainPostagemPrincipal>
          <ImageWrapper/> 
          <ContentWrapper>
            <div style={{heigth: '80%'}}>
            </div>
          </ContentWrapper>
        </MainPostagemPrincipal>

      </PostagemPrincipal>
    </>
  );
}
