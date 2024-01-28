import styled, {css} from "styled-components";
import { theme } from '../../theme.js'

const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 5px solid ${theme.highlightColor};
`

const PriDiv_FotoName = styled.div`
  color: ${theme.textColor1};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;

  ${css` 
    @media (max-width: 600px) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `} 
`

const H1_PriDiv_FotoName = styled.h1`
  
   ${css` 
    @media (max-width: 600px) {
      margin-top: 15px;
      display: flex;
      justify-content: center;
      
    }
  `} 
`

export default function infoUserHeaderPerfil(props) {

    return (
        <>
            <div>
                <Image src={props.src}></Image>
            </div>
            <PriDiv_FotoName>
                <H1_PriDiv_FotoName>{props.name}</H1_PriDiv_FotoName>
                <h3>{props.nameTwo}</h3>
                <h3> {props.totalfriends} amigos no total</h3>
            </PriDiv_FotoName>
        </>
    )
}