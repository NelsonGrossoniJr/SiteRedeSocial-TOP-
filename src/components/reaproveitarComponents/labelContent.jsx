import React from 'react';
import { theme } from '../../theme.js'
import Text from '../text/simpleText';
import HelperText from '../text/helperText';

export default function InfoOpenCardGame(props){
  return(
    <div>
      <HelperText themeColor={theme.textColor3}>{props.label}</HelperText> 
      <Text themeColor={theme.textColor1}>{props.content}</Text>
    </div>
  );
}


            