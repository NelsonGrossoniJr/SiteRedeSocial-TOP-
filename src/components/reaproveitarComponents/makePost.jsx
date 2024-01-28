import React from 'react'
import styled from "styled-components";
import { theme } from '../../theme.js'
import DataHelper from "../../DataHelper.js"
  const DH = new DataHelper();

// COMPONENTS
import Text from '../text/titleText';
import HelperText from '../text/helperText';

// INPUT
import TextButton from  "../reaproveitarComponents/buttons/textButtonBehaviour";
import FilledButton from  "../reaproveitarComponents/buttons/filledButtonBehaviour";
import Input from './textInput'
import ContentInput from './textAreaInput'
import Review from './makeReview'
import {Select, Option} from './selectOption'


export default function MakePost(props){
  const [games, setGames] = React.useState([])
  const [post, dispatch] = React.useReducer( AtualizarPostagem, initialPost)
  const [error, setError] = React.useState('')
  
  React.useEffect(() => {
    async function loadGames(){
     setGames( await DH.getAllGames()) 
    }
    loadGames()
  }, []);

  const publish = () =>{
    let newPost = {...post}
    if(newPost.title == ''){
      setError('Sua Publicação precisa de um título')
      return
    }
    if(newPost.content == ''){
      setError('Escreva um texto para a sua publicação')
      return
    }
    if(newPost.game_id == ''){
      setError('Selecione um jogo para a sua publicação')
      return
    }
    setError('')
    
    newPost.user_id = props.user.id
    newPost.user = props.user
    newPost.date = getTimeString()
    newPost.imgPost = post.game.thumbnail
    
    props.callBack.call(this, newPost)
    dispatch({type: 'reset', payload: ""} )
  }
 
  // » ►
  return(
    <Box autoComplete="off">
      <Head>
        <Text> Titulo</Text>
        <Input 
        type='text'
        value={post.title}
        placeholder={'Escreva aqui o titulo da sua resenha'}
        onChange={(e)=>{dispatch({type: 'title', payload: e} )}}/>

        <div style={{display: 'flex', columnGap: '5px', width:'90%', flexWrap:'wrap'}}>
          <Text>Jogo</Text>
        
          <Select 
          value={post.game_id} 
          onChange={(e)=>{
            dispatch({ type: 'game', 
              payload: games.filter((g)=> (e.target.value == g.id)) })
          }}>
            
          <Option disabled hidden default value="">  Escolha um Jogo </Option>
            { games.map((item, index)=>{
                return <Option key={index} value={item.id}> {item.title} </Option>
              })}
        </Select>
        </div>
      </Head>
      
      <ContentInput 
        rows='10'
        value={post.content}
        onChange={(e)=>{dispatch({type: 'content', payload: e} )}}
        placeholder={'Escreva aqui o que você pensa'}/>
      
      
      <Footer>
        
        <Review onChange={(e)=>{dispatch({type: 'review', payload: e}) }}/>

        <div>
          <div style={{backgroundColor:"#ff2020", borderRadius: '2px'}}>
            <HelperText themeColor='#ffffff'> {error} </HelperText>
          </div>
        </div>
        
        <PublishWrapper>
          <FilledButton onClick={publish}>Publicar</FilledButton>
        </PublishWrapper>
      </Footer>
    </Box>
  )
}

const Box = styled.div`
  font-family: sans-serif;
  background-color: ${theme.backgroundColor1} ;
  width: 70vw;
  height: 60vh;
  margin-top: 30px;
  border-radius: 10px;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  row-gap: 20px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19);
  
  @media(max-aspect-ratio: 8/7){
    height: auto;
  }
`
const Footer = styled.div`
  height: 10%;
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  
  @media(max-width: 500px){
    flex-direction: column;
    row-gap: 5px;
    height: 20%;
  }
`

const Head = styled.div`
  display:flex;
  flex-direction: column;
  align-items: space-between;
  row-gap: 10px;
`
const PublishWrapper = styled.div`
  display:flex;
  align-items: center;
  justify-content: center
`

function getTimeString(){
  let d = new Date()
  let options = { year: 'numeric', month: 'numeric', day: 'numeric' };  
  let today = d.toLocaleDateString('pt-BR', options)
  return today
}

const initialPost = {
      post_id: null,
      user_id: null,
      likes: 0,
      shares: 0,
      game_id: "",
      game_name:"",
      review: false,
      review_stars: 0,
      title: "",
      date:"",
      imgPost:"",
      content:"",
      comments:[]
  }

function AtualizarPostagem(post, action){
  let payload = action.payload
  switch(action.type){
    case 'game':
      return {...post, game: payload[0], game_id: payload[0].id}
    case 'title':
      return {...post, title: payload.target.value}
    case 'content':
      return {...post, content: payload.target.value}
    case 'review':
      return {...post, review: payload.review, review_stars: payload.stars}
    case 'reset':
      return initialPost
  }
}