import styled from "styled-components";
import { theme } from "../../theme.js";

// COMPONENTS
import UserInfo from "../reaproveitarComponents/userInfo.jsx";
import Title from '../text/titleText';
import HelperText from '../text/helperText';


const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 10px;
  
  padding: 3%;
  padding-bottom: 10px;
  padding-top: 10px;
`
const Wrapper = styled.div`
  text-align: center;
  @media(max-width: 400px){
    display: none
  }
`
export default function PostInfo(props) {
  let contentType = (props.post.review)? "reviewed" : "posted"; 

  return(
    <Box> 
      <UserInfo user={props.post.user} > 
        <HelperText> {props.post.user.name} </HelperText>
        <HelperText>
          ◊ {contentType} on {props.post.date}
        </HelperText>
      </UserInfo>

      <Wrapper>
        <Title themeColor={theme.highlightColor}>
          {props.post.game.title} 
        </Title>
      </Wrapper> 
    </Box> 
  )  
}
