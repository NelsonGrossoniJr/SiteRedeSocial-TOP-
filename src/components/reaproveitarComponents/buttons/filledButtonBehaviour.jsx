import React from 'react';
import { theme } from '../../../theme.js'
import Text from '../../text/titleText';

export default function FilledButtonBehaviour(props) {
  const [clicked, setClicked] = React.useState(false);
  const [hoover, setHoover] = React.useState(false);

  let c = ()=> {return}
  if(props.onClick != undefined){
    c = props.onClick
  }
  
  let altColor = theme.highlightColor 
    if (props.alternateColor != undefined) { altColor = props.alternateColor}
    
  const handleClick = () => {
    setClicked(true)
    setTimeout(()=>{
      setClicked(false)
    }, 100)
    c.call(this, clicked)
  }

  return (
    <div style={outerButton(altColor)}>
      <div 
        onMouseEnter={()=> setHoover(true)}
        onMouseLeave={()=> setHoover(false)}
        onClick={handleClick}
        style={textButton(clicked, hoover)}>
        <Text themeColor="" >
            {props.children}
        </Text>
      </div>
    </div>
  )
}
 
function textButton(activated, hoover){
  //os digitos no final são a transparencia
  let defBg = '#00000000'
  if (hoover){  defBg = `${theme.textColor1}60` }
  if (activated){  defBg = `${theme.backgroundColor1}60`}
  
  return ({
    display : 'flex',
    flexDirection : 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: '3px',
    padding: '5px',
    borderRadius: '8px',
    width: '100%',
    height: '100%',
    
    color: theme.backgroundColor1,
    background: defBg,
    transitionDuration: '0.2s',
  })
}


function outerButton(altColor){
  return({
    backgroundColor: altColor,
    userSelect: 'none',
    borderRadius: '8px',
    overflow: 'hidden'
    })
}