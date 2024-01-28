import React from 'react'
import styled from 'styled-components'
import { theme } from '../../theme.js'
import Icon from './navIcon.jsx';

export default function LoadingButton(){
  const [step, setStep] = React.useState(0);

  React.useLayoutEffect(()=>{
    setTimeout(()=>{
      if ( -10 < step%360 < 10){
        setStep(0)
      }
       setStep(step+200) 
    }, 700)
  })
  
  
  return(
    <div>
      <Wrapper toggle={step}>
          <Icon name='refresh'> </Icon>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  opacity: 0.4;
  background-color: #00000000;
  color: ${theme.highlightColor};
  z-index: 1;
  transform: rotate(${(props)=> (props.toggle)}deg) scale(2);
  transition-duration: 0.75s
`