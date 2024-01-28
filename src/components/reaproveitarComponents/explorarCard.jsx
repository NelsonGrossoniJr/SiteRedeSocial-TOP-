import styled from "styled-components";
import BigText from '../text/bigText';
import { theme } from '../../theme.js'
import React from 'react';



const DivTitleCard = styled.div`
  width: 300px;
  height: 150px;
  display: flex;
  align-items: flex-end;
  text-align: center;
  background: linear-gradient(to top, black, rgba( 240, 248, 255, 0 ));
  visibility: hidden;
  position: absolute;
  bottom: 0;
  transition-duration: 0.5s;
  opacity: 0;
  padding: 10px;
  `;

const Card = styled.div`
  width: 300px;
  height: 150px;
  border: 2px solid ${theme.highlightColor+"60"};
  position: relative;
  padding-top: 0px;
  padding-bottom: 0px;
  
  &:hover {
    border: 2px solid ${theme.highlightColor};
    transition-duration: 0.5s;
    ${DivTitleCard} {
      visibility: visible;
      opacity: 1;
    }
  }
`;

const DivImgCard = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  
`;

export default function ExplorarCardGames(props) {
   
  return (
    <Card>
      <DivImgCard style={{backgroundImage: `url(${props.imageGames})`}}>
        <DivTitleCard>
          <BigText themeColor={theme.highlightColor}>{props.nomeGame}</BigText>
        </DivTitleCard> 
      </DivImgCard>   
    </Card>
  );
}



