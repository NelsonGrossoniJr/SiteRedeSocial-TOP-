import styled from "styled-components";
import React from 'react'
import { theme } from "../../theme.js";


import Logo from "../reaproveitarComponents/ProjectName.jsx";
import HeaderLinkIcon from "../reaproveitarComponents/navButton.jsx";
import Usuario from '../reaproveitarComponents/userInfo.jsx';
import HelperText from '../text/helperText.jsx'
import BotaoLogout from "../reaproveitarComponents/buttons/filledButtonBehaviour.jsx";
import BigText from '../text/bigText.jsx'
import Icon from '../reaproveitarComponents/navIcon'


const mediaTrashold = 800;

const HeaderStyle = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  row-gap: 5px;
  
  justify-content: space-between;
  align-items: center;
  
  padding-right: 20px;
  padding: 10px;
  
  border-bottom: 1px solid ${theme.highlightColor};
  background-color: ${theme.backgroundColor1};  

  @media (max-width: ${mediaTrashold}px){
    flex-wrap: wrap; 
    align-items: start;
  }
`;

const LogoWraper = styled.div`
  background-color: ${theme.backgroundColor1};
  font-family: "courier";
  color: ${theme.highlightColor};
  letter-spacing: -1;
  border-radius: 5px;
  text-shadow: 2px 2px 0px #000000;
  flex-shrink: 0;
  padding: 5px;

  
  @media (max-width: 400px){
    display: none;
  }
`

const Navbar = styled.div`
  align-self: end;
  height: 30%;
  margin-bottom: -10px;
  justify-self: stretch;
  flex-shrink: 2;
  
  display: flex;
  justify-content: center;
  column-gap: 5%;

  @media (max-width: ${mediaTrashold}px){
    order: 1;
    width: 100%;
    magin: -10px;
  }
`

const Div_BotaoLogout = styled.div`
  transform: scale(0.7);
  position: absolute;
  right: 10px;
  top: 50px;

`

export default function Header(props) {
    return (
        <HeaderStyle>

            <Usuario user={props.user} helperText="Bem Vindo">
                <HelperText themeColor={theme.highlightColor}>
                    Online </HelperText>
            </Usuario>

            <Navbar>
                <HeaderLinkIcon linkNavigation="/user/perfil" title="Perfil" icon="person" />
                <HeaderLinkIcon linkNavigation="/user/feed" title="Feed" icon="group" />
                <HeaderLinkIcon linkNavigation="/explorar" title="Explorar" icon="travel_explore" />
            </Navbar>

            <LogoWraper>
                <Logo />
            </LogoWraper>
            {
                (props.user == 0) ? <div /> : (
                    <Div_BotaoLogout onClick={() => { props.logout.call(this) }}>
                        <BotaoLogout alternateColor='#ff0000cc'>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Icon name='logout'> </Icon>
                                Sair
                            </div>
                        </BotaoLogout>
                    </Div_BotaoLogout>)
            }
        </HeaderStyle>
    );
}