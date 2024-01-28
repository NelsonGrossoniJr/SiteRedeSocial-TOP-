import React from 'react'
import styled from "styled-components";
import { theme } from "../../theme.js";

// COMPONENTS
import Button from "../reaproveitarComponents/buttons/filledButtonBehaviour.jsx";
import TextInput from '../reaproveitarComponents/textInput';
import Text from '../text/simpleText';

export default function CreateComment(props){
  
  const handle = (event) =>{
    event.preventDefault();
    let content = event.target[0].value
    
    if (content == ''){ return }
    event.target[0].value = ''
    
    let d = new Date()
    let options = { year: 'numeric', month: 'numeric', day: 'numeric' };  
    let today = d.toLocaleDateString('pt-BR', options)
    
    let newComment = {   
      content: content,
      date: today
    }
    if(props.callBack != null){
      props.callBack.call(this, newComment)  
    }
  }
  // » ►
  return(
    <Box onSubmit={handle} autoComplete="off">
      <TextInput  
        name='comment' 
        placeholder={'Escreva um comentário'}/>
      <SubmitButton type='submit'>
        <Button>
            <Text themeColor=''>
              Enviar
            </Text>
        </Button>
      </SubmitButton>
    </Box>
  )
}

const Box = styled.form`
  display: flex;
  flex-direction: row;
  column-gap: 5px;

  align-items: stretch;
  overflow: hidden;
  border-radius: 8px;
`
const SubmitButton = styled.button`
  border-width: 0px;
  background-color: #00000000;
  box-shadow: none;
  padding: 5px;
`
