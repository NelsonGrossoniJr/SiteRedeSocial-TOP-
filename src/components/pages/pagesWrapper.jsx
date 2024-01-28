import styled from "styled-components";
import Header from './Header.jsx';
import Footer from './Footer.jsx';


const AllGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr 100% 3vh;
  grid-template-columns: 100%;
  grid-template-areas:
    "header"
    "main"
    "footer"
`
const FooterGrid = styled.div`
  grid-area: footer
`

const HeaderGrid = styled.div`
  grid-area: header;
`

const MainGrid = styled.div`
  grid-area: main;
  min-height: 95vh;
`

export default function PagesWrapper(props) {
    return (
        <AllGrid>
            <HeaderGrid >
                <Header logout={props.logout} user={props.user} />
            </HeaderGrid>

            <MainGrid>
                {props.children}
            </MainGrid>

            <FooterGrid>
                <Footer />
            </FooterGrid>

        </AllGrid>
    )
}