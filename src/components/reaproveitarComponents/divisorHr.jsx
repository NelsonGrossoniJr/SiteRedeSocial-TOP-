import styled from "styled-components";
import { theme } from '../../theme.js'


const CustomHr = styled.hr`
    border: 1px dashed ${theme.highlightColor};
    padding: 0;
    margin: 0;

    width: 80%;
    margin-left: 10% ;
    margin-right: 10% ;
    border-radius: 10px;
`

  export default function Divisor(){
    
    return (<div> <CustomHr /> </div>)
  }
