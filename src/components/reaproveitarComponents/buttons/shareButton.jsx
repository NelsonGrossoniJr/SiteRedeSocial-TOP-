import React from 'react'
import { theme } from '../../../theme.js'
import styled from 'styled-components'
import DataHelper from "../../../DataHelper.js";
    const DH = new DataHelper();

// COMPONENTS
import ActionButton from './actionButtonBehaviour.jsx';
import Icon from '../navIcon.jsx';
import Popup from '../popup'
import Amigos from '../listaAmigos'
import Loading from '../loadingIcon'
import Text from '../../text/titleText'


export default function ShareButton(props){
  const [show, setShow] = React.useState(false);
  const [friends, setFiends] = React.useState([])

  React.useState(()=>{
    async function Load(){
      setFiends(await DH.getFriendsByUserId(6));  
    }
    Load()
  })
  
  const handle=(newPost)=>{
    setShow(false)
    props.callBack.call(this, newPost)
  }

  const Loaded = () =>{
    if (friends.length < 5){
      return <Loading/>
    }
    else{
      return <Amigos users={friends}/>
    }
  }
  
  return(
    <div>
      <ActionButton onClick={()=>{setShow(true)}}>
          <Icon name='send'> </Icon>
      </ActionButton>
      {show && (
        <Popup close={()=> {setShow(false)}} >
          <Wrapper>
            <Text>Compartilhar com:</Text>
            {Loaded()}
          </Wrapper>
        </Popup>)
      }
    </div>
  )
}

const Wrapper = styled.div`
  min-width: 40vw;
  min-height: 60vh;
  background-color: ${theme.backgroundColor1};
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19);
  border-radius: 5px;
  padding: 10px;
`