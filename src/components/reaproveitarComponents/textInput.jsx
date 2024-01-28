import styled from "styled-components";
import { theme } from '../../theme.js'

const Input = styled.input`
  background-color: #00000000;
  color: ${theme.textColor1};
  width: 100%;
  border: 1px solid ${theme.textColor3+99};
  border-radius: 5px;
  outline: 0;
  
  resize: none;
  padding: 5px;
  :: placeholder {
    color: ${theme.textColor3}
  } 
  &:focus {
    border: 1px solid ${theme.highlightColor};
    outline: 2px solid ${theme.highlightColor+'33'};
  }
`
export default Input