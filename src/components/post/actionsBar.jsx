import styled from "styled-components";
import Like from '../reaproveitarComponents/buttons/likeButton.jsx';
import Share from '../reaproveitarComponents/buttons/shareButton.jsx';
import PostTag from './postTag.jsx';



const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  
  column-gap: 10px;
  margin: 0;
`
const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  column-gap: 10px;
  margin: 0;
  height: 35px;
`

export default function ActionsBar(props){
  return(
    <Actions>
      <Div>
        <PostTag post={props.post} style={{justifySelf: 'start'}}/>
        {props.children}
      </Div>
      <Div>
        <Like ammount={props.post.likes} callBack={props.callBack}/>
        <Share> {/* CLASSE GLOBAL USER */}</Share>
      </Div>
    </Actions>
  )
}