import React from 'react'
import styled, {keyframes} from "styled-components";
import { theme } from '../../theme.js'

import ToggleButton from "./buttons/toggleButtonBehaviour";
import Icon from "../reaproveitarComponents/navIcon.jsx"

export default function MakeReview(props){
  const [stars, setStars] = React.useState(0);
  const [review, setReview] = React.useState(false);

  React.useEffect(()=>{
    props.onChange.call(this, {review: review, stars: stars})
  }, [stars, review])
  
  const handleStars = (value) =>{
    if(stars == value){
      setStars(value-1)
    }
    else{
     setStars(value) 
    }
  }
  
  return(
    <Box>
      <ToggleButton onClick={()=>setReview(!review)}>
        Review
      </ToggleButton>
      <StarsContainer hide={!review}> 
        {
          [1,2,3,4,5].map((item)=>{
            return (
              <div key={item} onClick={()=>handleStars(item)}>
                <Icon name={(stars >= item)? 'star':'star_border'}/>
              </div>
            )
          })
        }
      </StarsContainer>
    </Box>
  )
}

const StarsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  color: ${theme.highlightColor};
  user-select: none;
  cursor: pointer;

  transition-duration: 0.5s;
  z-index: ${props => props.hide? "-1": "0"};
  opacity: ${props => props.hide? "0": "1"};
  transform: 
    scale(${props => props.hide? "0.7": "1"}, 1) 
    translateX(${props => props.hide? "-50%": "0"}) ;

  @media(max-width: 300px){
    transform:
    scale(${props => props.hide? "0.7": "0.9"}, 0.9) 
    translateX(${props => props.hide? "-50%": "-10px"}) ;
 
  }
`

const Box = styled.form`
  display: flex;
  flex-direction: row;
  column-gap: 5px;

  
  align-items: stretch;
  overflow: hidden;
  border-radius: 8px;
  border: 0px solid ${theme.textColor3+99};
`
