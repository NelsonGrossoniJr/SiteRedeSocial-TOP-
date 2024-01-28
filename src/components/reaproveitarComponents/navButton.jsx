import styled from "styled-components";
import {useState} from 'react';
import { theme } from '../../theme.js'
import { Link } from "react-router-dom";

import TitleText from '../text/titleText';
import Icon from './navIcon.jsx'


const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 5px;
  padding: 3px;
  width: 180px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;

  transition-duration: 0.15s;
  color: ${theme.highlightColor};
  background-color: ${theme.backgroundColor1};
  
  :hover {
    margin-top: -7px;
    color: ${theme.backgroundColor1};
    background-color: ${theme.highlightColor};
  }
  @media(max-width: 1000px){
    width: 160px;
  }

  @media(max-width: 950px){
    width: 140px;
  }

  @media(max-width: 850px){
    width: 120px;
  }
}
  
`;

export default function HeaderLinkIcon(props) {
  const [active, setActive] = useState(false)

  return(
    <StyledLink to= {props.linkNavigation}>
          
        <TitleText themeColor="">
          {props.title}
        </TitleText>
        <TitleText themeColor="">
          <Icon footprint='' name={props.icon}></Icon>
        </TitleText>
          
    </StyledLink> 
  );
}