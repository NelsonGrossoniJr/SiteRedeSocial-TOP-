import styled from "styled-components";
import React from 'react';
import {Navigate} from 'react-router-dom'
import { theme } from "../../theme.js";
import DataHelper from "../../DataHelper.js"
  const DH = new DataHelper();

// COMPONENTES
import Postagem from "../post/post.jsx";
import LoadingPost from '../post/postStructure.jsx'
import CreatePostButton from '../reaproveitarComponents/createPostButton'



export default function MainFeed(props) {
  if(props.user == 0){
    return(<Navigate to="/login" /> )
  }
  
  const [posts, setPosts] = React.useState([]);  
  const [renderCount, setRenderCount] = React.useState(0); 
  
  React.useEffect(() => {
    console.log('reload')
    if(props.user.id){
      fetchData() 
    } 
  },[props.user])

  function fetchData() {
    DH.getUserFeed(props.user.id)
      .then(f => setPosts(f))
  }
  
  const addPost = (post) =>{
    let a = posts
    a.unshift(post)
    setPosts(a)
    setRenderCount(renderCount+1)
  }
  
  return(
    <>
      <div style={{width: '100%', display:'flex', justifyContent:'end', padding: '20px'}}>
        <CreatePostButton callBack={addPost} user={props.user}/>
      </div>
      {
        (posts.length > 2)? 
        (posts.map((postData, index)=>{
          let s = `${renderCount}#${index}`
          return(<Postagem key={s} post={postData} user={props.user}/>)
          }) 
        ) 
        : [1, 2].map((i)=> {return <LoadingPost key={i}/>})
      }
    </>
  );
}