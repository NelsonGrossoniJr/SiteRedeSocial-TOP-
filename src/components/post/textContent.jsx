import styled from "styled-components";
import { theme } from "../../theme.js";

// COMPONENTS
import Title from '../text/bigText.jsx'
import Text from '../text/simpleText.jsx'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  row-gap: 20px;

  @media(min-width: 800px){
   padding-top: 0px; 
  }
`

export default function TextContent(props){
  return(
    <Wrapper>

      <Title themeColor={theme.highlightColor}>
          {props.post.title}
      </Title>
     
      <Text> 
        {props.post.content}
      </Text>
  
    </Wrapper>
  )
}