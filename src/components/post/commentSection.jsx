import { useEffect, useState } from 'react'
import styled from "styled-components";

// COMPONENTS
import Button from "../reaproveitarComponents/buttons/textButtonBehaviour.jsx"
import HelperText from '../text/helperText';
import Comment from './comment.jsx';
import CreateComment from './createComment.jsx'

export default function ComentariosAccordion(props) {
    if ((props == undefined) || props.comments == []) {
        return
    }

    const [comments, setComments] = useState(props.comments)
    const [key, FORCE_RENDER] = useState(0)
    const [size, setSize] = useState(false)
    const [show, setShow] = useState(false)

    const commentCreation = (newComment) => {
        let n = props.callBack.call(this, newComment)
        setComments(n)
        setShow(true)
        FORCE_RENDER(key + 1)
    }

    useEffect(() => {
        resize()
    }, [show, size])

    const MAX_SIZE = 400
    function resize() {
        if (show && (size < MAX_SIZE)) {
            setSize(size + 10)
        }
        if (!show && (size > 0)) {
            setSize(size - 10)
        }
        return
    }

    return (
        <SectionWrapper>
            <div style={commentList(size)}>
                {comments.map((item, index) => {
                    let s = `${index}#${key}`
                    return <Comment key={s} data={item} />
                })}
            </div>

            <CreateComment callBack={commentCreation} />

            <div onClick={() => setShow(!show)} style={{ width: '50%' }}>
                <Button>
                    <HelperText themeColor=''>
                        {(show ? 'Esconder' : 'Exibir') + ' comentários'}
                    </HelperText>
                </Button>
            </div>
        </SectionWrapper>)
}

function commentList(size) {
    let defDisplay = 'flex';
    let defOpacity = size / 400;
    if (size < 10) { defDisplay = 'none' }

    return ({
        display: defDisplay,
        opacity: defOpacity,
        flexDirection: 'column',
        overflow: 'auto',

        padding: '10px',
        rowGap: '20px',
        height: size + 'px',
    })
}


const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-arround;
  row-gap: 5px;
`