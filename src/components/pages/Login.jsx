import React from 'react'
import styled from 'styled-components'
import { theme } from "../../theme.js";
import { Navigate } from 'react-router-dom'
import DataHelper from "../../DataHelper.js"
  const DH = new DataHelper();


import Logo from "../reaproveitarComponents/ProjectName.jsx"
import LoadingIcon from "../reaproveitarComponents/loadingIcon.jsx"
import Input from '../reaproveitarComponents/textInput'
import Button from '../reaproveitarComponents/buttons/actionButtonBehaviour'
import HelperText from '../text/helperText'

export default function Form(props){
  if(props.user != 0){
    return (<Navigate to="/user/feed" />)
  }

  
  const [user_name, setUser_name] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [verifying, setVerifying] = React.useState(false)
  const error = React.useRef('')
  
  const validateForm = async () =>{
    setVerifying(true)
    let valid = await DH.tryLogin({user_name: user_name, password: password})
    
    if(valid != false){
      error.current = ''
    } else {
      error.current = 'Login ou senha incorrentos'
    }

    setVerifying(false)
    return valid
  }

  const tryPublish = async() => {
    let user = await validateForm();
    if(!user){
      return
    }
    
    props.login.call(this, user)
  }
  
  return(
    <Box>
      <FormStyle>
        <ItemStyle>
          <HelperText themeColor={theme.highlightColor}> Usuário: </HelperText>
          <Input
          placeholder='user_name'
          onChange={(e)=>setUser_name(e.target.value)}/>      
        </ItemStyle>
  
        <ItemStyle>
        <HelperText themeColor={theme.highlightColor}> Senha: </HelperText>
        <Input
          type='password'
          placeholder='*****'
          onChange={(e)=>setPassword(e.target.value)}/>
        </ItemStyle>
        
        <footer>
          <HelperText>
            <span style={{color:'#ff6040'}}>
              {error.current}
            </span> 
          </HelperText>
           {
              (verifying)? (
                <Loading> 
                  <LoadingIcon/>
                </Loading>
              ):(
              <div>
                <Button onClick={tryPublish}> Login </Button>
              </div>
              )
            }
        </footer>
      </FormStyle> 
      
      <div style={{transform: 'scale(1.3)'}}>
        <Logo/>
        <div style={{transform: 'scale(0.5, 0.8)', opacity:'0.5'}}>
          <HelperText>GAMERS CONECTADOS</HelperText>
        </div>
      </div>
    </Box>
  )
}

const Loading = styled.div`
  transform: scale(0.4);
`

const FormStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 15px;
  padding: 15px;

  font-family: sans-serif;
  background-color: ${theme.backgroundColor1} ;
  margin-top: 30px;
  border-radius: 10px;

  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19);
`

const ItemStyle = styled.div`
  display:flex;
  flex-direction: column;
  row-gap: 3px;
`

const Footer = styled.div`
  display: flex;
  width: 105%;
  justify-content: space-between;
`

const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 13%;
  padding-top: 7%;
  align-items: center;
  justify-content: start;
  background-color: ${theme.backgroundColor2};
`