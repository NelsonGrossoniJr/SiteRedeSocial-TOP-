import styled from "styled-components";
import { theme } from "../../theme.js";
import React from "react";
import DataHelper from "../../DataHelper.js"
  const DH = new DataHelper();

// COMPONENTS
import ComentariosAccordion from "./commentSection.jsx";
import PostInfo from "./postInfo.jsx";
import Content from './textContent.jsx';
import PostImage from './image.jsx';
import ActionsBar from './actionsBar.jsx';
import CustomHr from '../reaproveitarComponents/divisorHr.jsx';
  
export default function Postagem(props) {
    if (props.post == undefined ||
        props.post == [] ||
        props.post == '' ) {
        return
    }

  const [post, setPost] = React.useState(props.post);
  const [key, force] = React.useState(0);
  
  const changeLikes = (ammount) => {
    let a = {...post}
    a.likes = ammount;
    setPost(a)
    force(key+1)
  }

    const changeComments = (newcomment) => {
        let a = post
        newcomment.user = props.user
        newcomment.user_id = props.user.id
        a.comments.push(newcomment);
        setPost(a)
        return a.comments
    }
  
  return(     
      <PostagemPrincipal>
          <PostInfo post={props.post} data-testid='post' />
        <CustomHr/>
        
        <MainPostagemPrincipal>
          <ImageWrapper>
             <PostImage src={props.post.imgPost}/>
          </ImageWrapper>

              <ContentWrapper data-testid='post-content'>
            <Content post={props.post} />
            <ActionsBar 
              post={props.post} 
              callBack={changeLikes}/>
          </ContentWrapper>
          
        </MainPostagemPrincipal>
        
        <FooterPostagemPrincipal>
          <ComentariosAccordion 
            key={key}
            comments={props.post.comments}
            callBack={changeComments}
            data-testid='post-comments'
          />
        </FooterPostagemPrincipal>
      </PostagemPrincipal>
  );
}

// ______________________________________ STYLED COMPONENTS
const PostagemPrincipal = styled.div`
  font-family: sans-serif;
  background-color: ${theme.backgroundColor1} ;
  width: 90%;
  height: auto;
  margin-top: 30px;
  border-radius: 10px;

  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19);
`

const MainPostagemPrincipal = styled.div`
  display: flex;
  flex-direction: row;
  
  width: 100%;
  height: auto;
  
  @media(max-aspect-ratio: 8/7){
    flex-direction: column;
  }
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 45%;
  height: auto;
  margin: 0px;
  margin-top: 5px;
  overflow: hidden;
`
const FooterPostagemPrincipal = styled.div`
  padding: 10px;
  padding-left: min(5%, 20px);
  padding-right: min(5%, 20px);
`
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 20px;
  min-width: 55%;
  padding: min(5%, 20px);
  padding-bottom:0px;
`
