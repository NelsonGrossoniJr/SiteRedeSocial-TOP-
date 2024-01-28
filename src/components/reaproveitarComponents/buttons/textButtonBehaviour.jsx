import styled from "styled-components";
import { theme } from '../../../theme.js'
import Title from '../../text/helperText.jsx';

const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 3px;
  border-radius: 4px;
  user-select: none;
  width: inherit;
  height: inherit;
  transition-duration: 0.2s;
  color: ${theme.highlightColor};
  background-color: ${theme.backgroundColor1};
  :hover {
    color: ${theme.backgroundColor1};
    background-color: ${theme.highlightColor};
    
  :active {
    background-color: ${theme.highlightColor+'20'};
  }
}
`

export default function TextHelperButton(props) {
  let c = ()=> {return}
  if(props.onClick != undefined){
    c = props.onClick
  }
  return(
      <Box onClick={c}>
        <div style={{display:'flex', direction:'row', alignItems: 'center', justifyContent: 'center'}}>
          <Title themeColor=''>
              {props.children}
          </Title>
        </div>
      </Box> 
  );
}