import styled from "styled-components";
import Title from   '../text/titleText'
import { theme } from '../../theme.js'

const P_Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: flex-end;
  padding: 15px;
  width: 100%;
  height: 80%;
  opacity: 0;
  background: linear-gradient(to top,rgba(0,0,0,0.8), transparent);
  transition-duration: 0.5s;
  word-wrap: break-word;

    
  &:hover{
      opacity: 1;
  } 
  
`

const Container = styled.div`
  flex-basis: 26%;
  flex:1;
  
  width: 160px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: 2px solid #00000080;
  transition-duration: 0.5s;
  
  box-shadow: 0 6px 10px inset rgba(0, 0, 0, 0.4), 0 6px 20px inset rgba(0, 0, 0, 0.3);
  
  
  &:hover{
    
    height: 220px;
    width: 300px;
    border: 2px solid ${theme.highlightColor};
    z-index: 10;
    flex:2;
    
    ${P_Container} {
      opacity: 1;
      
    } 
  }
`



export default function IconFavoriteGames(props) {

    return (

        <Container style={{ backgroundImage: `url(${props.imageGames})` }}>
            <P_Container>
                <Title themeColor={theme.highlightColor}>
                    {props.nomeGame}
                </Title>
            </P_Container>
        </Container>

    )
}