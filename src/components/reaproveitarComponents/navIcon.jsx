import styled from "styled-components";

const Wraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(${props => props.Size});
  border-radius: 50%;

  @media(max-width: 600px){
    transform: scale(0.9); }
    
  @media(max-width: 420px){
    transform: scale(0.85); }

`

export default function Icon(props){
  let i = (props.scale == undefined)? '1': props.scale;
  return(
    <Wraper Size={i} >
      <span className="material-icons">{props.name}</span>
    </Wraper>
  )
}