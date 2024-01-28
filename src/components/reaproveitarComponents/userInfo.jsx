import styled from "styled-components";
import React from 'react';
import {Link} from 'react-router-dom'

import Avatar from './fotoPerfil';
import HelperText from '../text/helperText';
import MainText from '../text/titleText';


const Box = styled.div`
  flex-shrink:0;

  display: flex;
  flex-direction: row;
  align-items: top;
  column-gap: 10px;
  justify-content: start;
`

const TextContainer = styled.div`
  flex-direction: column;
  align-self: ${(props) => props.align};
`

export default function UserInfo(props) {
  // Verifica se as informações do usuario foram passadas corretamente
  if ((props == null) || (props.user == null)){
    return <Box></Box>
  }
  
  // Com essa props podemos passar informações como data, status de online etc...
  let helpertext = (props.helperText != null)? props.helperText : ""

  // Centraliza o nome na falta de mais textos 
  let a = (props.child != undefined)? 'start': 'center'
    
  return(
    <Link 
      state={{user: props.user}}
      to={`/user/perfil/${props.user.user_name}`}
      style={{textDecoration:'none'}}>
      <Box>
        <Avatar src={props.user.profile_pic} />
        <TextContainer align={ a } >
          <MainText>{props.user.user_name}</MainText>
          <HelperText> {helpertext} </HelperText>
          {props.children}
        </TextContainer>
      </Box>
    </Link>
  )
}