import Popup from './popup'
import FilledButton from './buttons/filledButtonBehaviour'
import MakePost from './makePost'
import React from 'react'

export default function CreatePostButton(props){
  const [show, setShow] = React.useState(false);

  const handle=(newPost)=>{
    setShow(false)
    props.callBack.call(this, newPost)
  }
  
  return(
    <div>
      <FilledButton onClick={()=>{setShow(true)}}>
        Criar Post
      </FilledButton>
      {show && (
        <Popup close={()=> {setShow(false)}} >
            <MakePost user={{id: 6}} callBack={handle}/ >
        </Popup>)
      }
    </div>
  )
}