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
  user-select: none;

  width: inherit;
  height: inherit;

  transition-duration: 0.2s;
  color: ${theme.highlightColor};
  background-color: ${theme.backgroundColor1};
  :hover {
    color: ${theme.backgroundColor1};
    background-color: ${theme.highlightColor};
    
}


`

export default function ActionButton(props) {
  let c = ()=> {return}
  if(props.onClick != undefined){
    c = props.onClick
  }
  return(
      <Box onClick={c}>
        <Title themeColor=''>
          <div style={{display:'flex', direction:'row', alignItems: 'center'}}>
            {props.children}
          </div>
        </Title>
      </Box> 
  );
}