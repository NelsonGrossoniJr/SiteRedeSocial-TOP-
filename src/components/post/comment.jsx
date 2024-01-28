import UserInfo from '../reaproveitarComponents/userInfo.jsx';
import CustomHr from '../reaproveitarComponents/divisorHr.jsx';
import Text from '../text/simpleText';
import HelperText from '../text/helperText.jsx';

export default function Comment(props){
  return(
    <div style={{width: '100%'}}> 
      <CustomHr/>
      <br></br>
      <UserInfo user={props.data.user}>
        <HelperText>{props.data.date}</HelperText>
        <Text> {props.data.content} </Text>
      </UserInfo>
    </div>
  )
}