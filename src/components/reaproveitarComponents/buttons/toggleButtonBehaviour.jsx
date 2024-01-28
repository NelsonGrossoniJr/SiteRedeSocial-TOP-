import {useState} from 'react';
import styled from "styled-components";
import { theme } from '../../../theme.js'
import Title from '../../text/titleText.jsx';

const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 3px;
  padding: 1px;
  border-radius: 8px;
  width: inherit;
  height: inherit;
  
  --color: ${theme.highlightColor};
  --bg: ${theme.backgroundColor1} ;

  transition-duration: 0.2s;
  color: var(--color);
  background-color: var(--bg);
  
  :hover {
    color: var(--color);
    background-color: var(--bg);
  }  

  :active {
    background-color: rgba(0,0,0,0.5);
    --color: ${theme.backgroundColor1} ;
    var(--color, ${theme.highlightColor} )
  }
   
}
`

export default function ToggleButton(props) {
  const [check, setCheck] = useState(false) ;
  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);

  const handleClick = (event) =>{
    if (props.onClick != undefined){
      props.onClick.call(this, !check)
    }
    setClick(true)
    setTimeout(()=>{
      setClick(false);
      setCheck(!check);
    }, 100)
  }
  
  return(
      <div 
        style={boxStyle(hover, click, check)}
        onMouseEnter={()=> setHover(true)}
        onMouseLeave={()=> setHover(false)}
        onClick={handleClick}
        >
        <Title themeColor=''>
          {props.children}
        </Title>
      </div> 
  );
}

function boxStyle(hoover, justClicked, checked){
  let defColor = theme.highlightColor;
  let defBg = theme.backgroundColor1;
  let defBorder = `1px solid ${theme.textColor3}99`

  if(hoover){
    defBg = theme.textColor3+'33';
  }
  if(checked){
    defColor = theme.backgroundColor1;
    defBg = theme.highlightColor; 
  }
  if(justClicked){
    defBorder = `3px solid ${theme.highlightColor}99`
  }
  
  return({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: '3px',
    padding: '5px',
    borderRadius: '8px',
    userSelect: 'none', 

    transitionDuration: '0.2s',
    border: defBorder,
    color: defColor,
    backgroundColor: defBg,
  })
}