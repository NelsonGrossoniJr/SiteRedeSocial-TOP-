import styled from "styled-components";
import { theme } from '../../theme.js'

export const Select = styled.select`
  background-color: ${theme.backgroundColor1};
  color: ${theme.textColor1};
  border-radius: 5px;
  border: 1px solid ${theme.textColor3+'99'};
      
  :focus {
    border: 1px solid ${theme.highlightColor};
    outline: 2px solid ${theme.highlightColor+'33'};
  }
`

export const Option = styled.option`
  color: ${theme.textColor2};
  background-color: ${theme.backgroundColor2};
`
