import styled from "styled-components";

const ImageStyle = styled.div`
  width: 100%;
  height: 250px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;


@media(min-width: 300px){
    height: 300px; 
  }
  
  @media(min-width: 400px){
    height: 400px; 
  }

  @media(min-width: 600px){
    height: 500px; 
  }  

  @media(min-width: 800px){
    height: 400px; 
  }

  @media(min-width: 1000px){
    height: 450px; 
  }

  @media(min-width: 1400px){
    height: 500px; 
  }

`

export default function Image(props){
  return(
    <ImageStyle style={{backgroundImage: `url(${props.src })` }} />
  )
}
/*
  return <img src='src/imagens/ImagensPost/golemgodwarImage.jpg'/>
         <img src='src/imagens/imagensPost/golemgodwarImage.jpg'>
         */