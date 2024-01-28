import styled from "styled-components";
import { theme } from "../../theme.js";
import { useState, useEffect } from 'react';
import {Navigate} from 'react-router-dom'
import DataHelper from "../../DataHelper.js"
  const DH = new DataHelper()

// COMPONENTES 
import React from 'react';
import Popup from '../reaproveitarComponents/popup'
import ExplorarCardGames from "../reaproveitarComponents/explorarCard";
import ExplorarOpenCardGames from '../reaproveitarComponents/gameCard';


const Container = styled.div`
  background-color: ${theme.backgroundColor2};
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-template-columns: repeat(5, 1fr);
  row-gap: 15px;
  column-gap: 5px;
  padding-top: 20px;
  


  @media (max-width: 1550px) {
    display: grid;
    grid-template-rows: repeat(7, 1fr);
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1250px) {
    display: grid;
    grid-template-rows: repeat(10, 1fr) ;
    grid-template-columns: repeat(3, 1fr) ;
  }

  @media (max-width: 950px) {
    display: grid;
    grid-template-rows: repeat(15, 1fr)  ;
    grid-template-columns: repeat(2, 1fr)  ;
  }

  @media (max-width: 650px) {
    display: grid;
    grid-template-rows: repeat(30, 1fr)  ;
    grid-template-columns: repeat(1, 1fr)  ;
  }
`

const GridItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`





//const games = gamesData;
export default function MainExplorar(props){
  if(props.user == 0){
    return(<Navigate to="/login" /> )
  }

  const [games, setGames] = useState([]);
  const [isCardGamesOpen, setIsCardGamesOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  const openCardGames = (game) => {
  setSelectedGame(game);
  setIsCardGamesOpen(true);
};

  const closeCardGames = () => {
    setIsCardGamesOpen(false);
  };

  useEffect(() => {
    async function fetchGames() {
      setGames( await DH.getAllGames())
    }
    fetchGames();
    
  }, []);
  
  return(
   
    <Container>
    {games.map((game) => (
      <React.Fragment key={game.id}>
        <GridItem onClick={() => openCardGames(game)}>
          <ExplorarCardGames
            nomeGame={game.title}
            imageGames={game.thumbnail}
          />
        </GridItem>
      </React.Fragment>
    ))}
    {isCardGamesOpen && (
      <Popup close={()=> {setIsCardGamesOpen(false)}}>
      <ExplorarOpenCardGames
        game={selectedGame}
      />
      </Popup>
    )}
  </Container>
    
  );
}