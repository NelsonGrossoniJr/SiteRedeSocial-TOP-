import React from 'react'
import styled from "styled-components"
import { theme } from '../../theme.js'

// COMPONENTS
import HelperText from '../text/helperText'
import CustomHr from './divisorHr.jsx'
import UserInfo from './userInfo.jsx'
import Input from './textInput'

let ListStyle = styled.div`
    display: flex;
    flex-direction: column;
    overflow: auto;
    background-color: ${theme.backgroundColor1} 
`

let ListItem = styled.div`
  padding: 10px;
  :hover{
    background-color: ${theme.highlightColor+'80'};
  }
`

export default function Amigos(props) {
  if((props == undefined)|| props.users == []){
    return }
  
  const [counter, setCounter] = React.useState(0)

  let friends = props.users
  React.useEffect(()=>{
    friends = props.users
  })
  
  const search = (e) => {
    let value = e.target.value;
    console.log(friends[0])

    let sorted = friends.sort((itemA,itemB)=>{
        let a = itemA.user_name.indexOf(value)
        let b = itemB.user_name.indexOf(value)
        if( a < 0){ return 1}
        if( b < 0){ return -1}
        if( a < b){ return -1}
    }) 
    friends = [...sorted]
    setCounter(counter+1)
  }
  
  return (
    <ListStyle>
      <div style={{padding: '5px'}}>
      <Input placeholder='pesquise por um Amigo'
        onChange={search}></Input>
      </div>
      {
        friends.map((item, index) => {
          let color = theme.textColor3
          let on = "Offline"
          
          if(item.online){
            color = theme.highlightColor;
            on = "Online"
          }
          return ([
            <ListItem key={index}>
              <UserInfo user={item}>
                <HelperText> {item.name} </HelperText>
                <HelperText themeColor={color}> {on} </HelperText>
              </UserInfo>
            </ListItem>
            ,
            <CustomHr key={index+'Hr'}></CustomHr>
            ])
        })}
    </ListStyle>
       ) 
}