import styled from "styled-components";
import React from 'react';
import { theme } from '../../theme.js'

// COMPONENTS
import BigText from '../text/bigText';
import Text from '../text/simpleText';
import Image from '../post/image.jsx'
import LabelContent from "./labelContent";

const Box = styled.div`
  background-color: ${theme.backgroundColor1}; 
  border-radius: 20px;
  width: 70vw;
  max-height: 90vh;
  overflow-y: auto;

  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19);
  @media (max-width: 950px) {
    width: 75vw;
  }

  @media (max-width: 550px) {
    width: 90vw;
  }
  
`

const Title = styled.div`
  padding: 10px;
  word-wrap:  break-word;
`

const ImageWrapper = styled.div`
  min-width: 45%;
  overflow: hidden;
`

const CardMain = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  max-height: 30%;
  
  @media(max-aspect-ratio: 8/7){
    flex-direction: column;
  }
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  min-width: 55%;
  word-wrap:  break-word;
  color: ${theme.textColor1};
`

const Information = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: 30% 70%;
  grid-gap: 10px;
  word-wrap:  break-word;
`


export default function ExplorarOpenCardGames(props){
  let gameTags = props.game.tags.replace(',', '\n')
  
  return(
      <Box>
        <CardMain>
          <ImageWrapper>
            <Image src= {props.game.thumbnail}/>      
          </ImageWrapper>

          <Description>
            <div>
              <Title>
                <BigText themeColor={theme.highlightColor}>
                  {props.game.title}
                </BigText> 
              </Title>
              <Text>{props.game.description}</Text>
            </div>
            
            <Information>
              <LabelContent label={"developer:"} content={props.game.developer}/>
              <LabelContent label={"release date:"} content={props.game.release_date}/>
              <LabelContent label={"tags:"} content={props.game.tags}/>
              <LabelContent label={"steam profile :"} content={props.game.steam_profile}/>
            </Information>
          </Description>
        </CardMain>  
      </Box>
  );
}

