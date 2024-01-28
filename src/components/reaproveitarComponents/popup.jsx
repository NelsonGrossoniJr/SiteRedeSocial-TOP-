import styled from "styled-components";
import React from 'react'
import { theme } from '../../theme.js'

import Text from '../text/titleText'
import FilledButton from './buttons/actionButtonBehaviour'

const OpenCardGames = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${theme.backgroundColor1+'80'};
  display: flex;
  align-items: center;
  justify-content: center;
`

const CloseCardGames = styled.span`
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  
  display:flex;
  align-items: stretch;
  justify-content: stretch;

  width: 30px;
  height: 30px;
`
const Wrapper = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
`


export default function Popup(props){
  const out = React.useRef(true)

  
  const handleClick = () => {
    if(out.current){
      props.close()
    }
  }

  return(
      <OpenCardGames onClick={handleClick}>
        <CloseCardGames>
          <FilledButton>
            <Text themeColor=''> X </Text>
          </FilledButton>
        </CloseCardGames>

        <Wrapper 
          onMouseEnter={()=> {out.current = false}}
          onMouseLeave={()=> {out.current = true }}>
          {props.children}
        </Wrapper>
        
      </OpenCardGames>
  );
}

