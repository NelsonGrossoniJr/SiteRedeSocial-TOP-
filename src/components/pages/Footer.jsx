import styled from "styled-components";
import { theme } from "../../theme.js";
import Text from '../text/helperText.jsx'

const FooterPrincipal = styled.div`
  width: 100%;
  height: 3vh;
  padding-left: 40%;
  background-color: ${theme.backgroundColor1};
  color: ${theme.textColor1};
`

export default function Footer(){

  return(
      <FooterPrincipal>
        <Text> 2023 - Instituto INFNET - Produzido por <b>Nelson Grossoni</b> e <b>João Victor Cícero</b></Text>
      </FooterPrincipal>  
  );
}