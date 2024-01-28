import styled, { css } from "styled-components";
import { theme } from "../../theme.js";
import React from 'react';
import { Navigate, useLocation } from "react-router-dom";
import DataHelper from "../../DataHelper.js";
    const DH = new DataHelper();



// COMPONENTES
import IconFavoriteGames from "../reaproveitarComponents/iconFavoriteGames";
import LoadingIcon from "../reaproveitarComponents/loadingIcon";
import UserInfo from "../reaproveitarComponents/userInfo";
import InfoUserHeaderPerfil from "../reaproveitarComponents/infoUserHeaderPerfil";
import ExplorarCardGames from '../reaproveitarComponents/explorarCard'
import Postagem from "../post/post.jsx";
import LoadingPost from '../post/postStructure.jsx';



const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.backgroundColor2};
  
`

const Header = styled.div`
  background-color: ${theme.backgroundColor1};
  width: 90%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 20px;
  border-radius: 10px;

  ${css` 
  @media(max-width: 1000px){
      flex-direction: column;
      justify-content: center;
      align-items: center;
      
    }
  `}
`

const FotoName_Header = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px;

  ${css`
    @media (max-width: 1000px) {
      display: flex;
      align-items: center; 
    } 
    @media (max-width: 600px) {
      flex-direction: column;
    }
  `} 
`


const ListaAmigosContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column; 
  align-items: center; 
`

const H3_ListaAmigosContainer = styled.h3`
  color: ${theme.highlightColor};
  margin-top: 10px;
`

const ListaAmigos = styled.div`
  width: 100%;
  padding: 10px 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(auto-fill, 1fr);
  gap: 5px;

  
  ${css`
  @media (max-width: 1000px) {
    display: flex;
    align-items: center; 
    justify-content: center;
    column-gap:15px;
    flex-wrap: wrap;
  }`
    }
`
/*
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
*/



const Main = styled.div`
  width: 100%;
  height: auto;
`

const FavoriteGames_Header = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
`
const H2_FavoriteGames_Header = styled.h2`
  color: ${theme.highlightColor};
  margin-top: 20px;
`

const PriDiv_FavoriteGames = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  background-color: ${theme.backgroundColor1 + '00'};

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  
`

const PostUserGames = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`



export default function MainPerfil(props) {
    if (props.user == 0) {
        return (<Navigate to="/login" />)
    }

    const location = useLocation();
    const user = location.state ? location.state.user : props.user;

    const [favGames, setFavGames] = React.useState([])
    const [friends, setFriends] = React.useState([])
    const [posts, setPosts] = React.useState([])
    const loaded = React.useRef(false)

    React.useEffect(() => {
        if (props.user.id) {
            fetchData()
        }
    }, [user, props.user, loaded])

    async function fetchData() {
        loaded.current = false
        let postsPromisse = DH.getPostByUserId(user.id)
        let gamesPromisse = DH.getGameListByIds(user.favorite_games)
        let friendsPromisse = DH.getFriendsByUserId(user.id)
        setPosts(await postsPromisse)
        setFavGames(await gamesPromisse)
        setFriends(await friendsPromisse)

        loaded.current = true
    }

    return (
        <Container key={loaded}>
            <Header>
                <FotoName_Header>
                    <InfoUserHeaderPerfil
                        src={user.profile_pic}
                        name={user.name}
                        totalfriends={friends.length}
                        nameTwo={user.user_name}
                    />
                </FotoName_Header>
                <ListaAmigosContainer>
                    <H3_ListaAmigosContainer>Amigos:</H3_ListaAmigosContainer>
                    <ListaAmigos>
                        {
                            (loaded.current) ? (
                                (friends.map((friend, index) => {
                                    return <UserInfo key={index} user={friend} helperText={friend.name} />
                                })
                                ))
                                : <LoadingIcon />
                        }
                    </ListaAmigos>
                </ListaAmigosContainer>
            </Header>

            <Main>
                <FavoriteGames_Header>
                    <H2_FavoriteGames_Header> Jogos Favoritos: </H2_FavoriteGames_Header>
                    <PriDiv_FavoriteGames>
                        {
                            (loaded.current) ? (
                                (favGames.map((game, index) => {
                                    if (index > 9) {
                                        return <></>
                                    }
                                    let s = `${index}#`
                                    return (<IconFavoriteGames
                                        key={s}
                                        nomeGame={game.title}
                                        imageGames={game.thumbnail} />
                                    )
                                })
                                ))
                                : <LoadingIcon />
                        }
                    </PriDiv_FavoriteGames>
                </FavoriteGames_Header>

                <PostUserGames>
                    {
                        (loaded.current) ? (
                            (posts.map((postData, index) => {
                                let s = `${index}#`
                                return (<Postagem
                                    key={s}
                                    post={postData}
                                    user={props.user} />
                                )
                            })
                            ))
                            : [1, 2].map((i) => { return <LoadingPost key={i} /> })
                    }
                </PostUserGames>
            </Main>
        </Container>
    );
}