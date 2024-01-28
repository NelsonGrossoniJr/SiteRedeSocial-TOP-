import styled from "styled-components";
import React from 'react';
import { theme } from "../../theme.js";
import { Outlet, Navigate } from 'react-router-dom'
import DataHelper from "../../DataHelper.js"
  const DH = new DataHelper();

// COMPONENTES
import ListaAmigos from '../reaproveitarComponents/listaAmigos.jsx'
import LoadingIcon from '../reaproveitarComponents/loadingIcon.jsx'



const MainFeedPrincipal = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`

const SideBar = styled.div`
  background-color: ${theme.backgroundColor1};
  width: 0%;
  height: 100%;

  @media(min-width: 1000px ){
    width: 20%;
  }
`

const Feed = styled.div`
  background-color: ${theme.backgroundColor2};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 5px 1px 5px rgba(0,0,0,0.2) inset, -5px 1px 5px rgba(0,0,0,0.2) inset;

  @media(min-width: 1000px ){
    width: 80%;
  }
`

export default function UserWrapper(props) {
  
  const [friends, setFriends] = React.useState(0)
  const [loaded, setLoaded] = React.useState(false)

  React.useEffect(() => {
    if(props.user.id){
      fetchData() 
    } 
  },[props.user])

  function fetchData() {
    DH.getFriendsByUserId(6)
      .then(f => setFriends(f))
      .then(()=> setLoaded(true))
  }
  
  return(
      <MainFeedPrincipal>
        
        <SideBar> 
          {
            (loaded)? <ListaAmigos users={friends}/>: (
              <div style={{marginTop: '10vh'}}>
              <LoadingIcon/>
              </div>)
          }
        </SideBar>
        
        <Feed>
          <Outlet/>
        </Feed>
        
      </MainFeedPrincipal>
  );
}