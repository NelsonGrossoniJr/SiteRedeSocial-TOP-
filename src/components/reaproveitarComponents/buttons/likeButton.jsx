import React from 'react';
import { theme } from '../../../theme.js'

import Text from '../../text/titleText';
import Icon from '../navIcon.jsx';
import FilledButton from './filledButtonBehaviour.jsx'

export default function Like(props) {
  let i = (props.ammount == undefined) ? 0 : props.ammount;
  const [number, setNumber] = React.useState(i);
  const [clicked, setClicked] = React.useState(false);


  const handleClick = () => {
    let newNumber = number + (clicked? -1: 1)
    if(props.callBack != null){
      props.callBack.call(this, newNumber )   
    }
    setNumber(newNumber)
    setClicked(!clicked) 
  }

  if(clicked){
   return(
    <div style={buttonWrapper} onClick={handleClick}>
      <FilledButton alternateColor='red'>
        <div style={{display:'flex', direction:'row', alignItems: 'center'}}>
          <Icon name='favorite_border'/>
          <Text themeColor=''> {number} </Text>
        </div>
      </FilledButton>
    </div>
  )}

  if(!clicked){
   return(
    <div style={buttonWrapper} onClick={handleClick}>
      <FilledButton>
        <div style={{display:'flex', direction:'row', alignItems: 'center'}}>
          <Icon name='favorite'/>
          <Text themeColor=''> {number} </Text>
        </div>
      </FilledButton>
    </div>
  )}
  return
}

const buttonWrapper = {  
    display : 'flex',
    flexDirection : 'row',
    alignItems: 'center',
    columnGap: '3px',
    padding: '1px',
    textAlign: 'center',
    borderRadius: "8px",
}








// BOTAO ANTIGO

/*
export default function Like(props) {
  let i = (props.ammount == undefined) ? 0 : props.ammount;
  const [number, setNumber] = React.useState(i);
  const [clicked, setClicked] = React.useState(false);
  const [hoover, setHoover] = React.useState(false);


  const handleClick = () => {
    let newNumber = (clicked)? -1: 1
    setNumber(number + newNumber)
    setClicked(!clicked) }

  return (
    <div 
      onMouseEnter={()=> setHoover(true)}
      onMouseLeave={()=> setHoover(false)}
      onClick={handleClick}
      style={heartStyle(clicked, hoover)}>
      <Icon footprint='' name='favorite'></Icon>
      <SimpleText>
        {number}
      </SimpleText>
    </div>
  )

}

function heartStyle(liked, hoover){
  let defColor = theme.backgroundColor2;
  let defBorder = `1px solid ${theme.backgroundColor2}`
  let defBg = theme.highlightColor;

  //CONDIÇÕES ALTERNATIVAS:
  if (liked){
    defColor = 'red';
    defBg = theme.backgroundColor2;
    defBorder = `2px solid red`;
  }

  if (hoover){
    
    defColor = theme.backgroundColor2;
    defBorder = `1px solid ${theme.backgroundColor2}`
    defBg = 'red';
  }

  if (liked && hoover){
    defColor = 'red';
    defBg = theme.backgroundColor2;
    defBorder = `2px solid red`;
  }
 /*
  if (liked){
    defColor = 'red';
    defBg = theme.backgroundColor2;
    defBorder = `2px solid red`;
  }

  if (hoover){
    defColor = theme.highlightColor;
    defBg = theme.textColor3;
    defBorder = `2px solid ${theme.textColor3}`
  }

  if (liked && hoover){
    defColor = theme.backgroundColor2;
    defBg = 'red';
    defBorder = `2px solid red`;
  }

  
  
  return ({
    display : 'flex',
    flexDirection : 'row',
    alignItems: 'center',
    columnGap: '3px',
    padding: '3px',
    textAlign: 'center',

    
    borderRadius: "8px",
    border: defBorder,
    color: defColor,
    backgroundColor: defBg,
    height: '2rem',
    font: '1.8rem round',
    transitionDuration: '0.3s',
    scale: (hoover&&liked)? '120%' : '100%'
  })
}
*/