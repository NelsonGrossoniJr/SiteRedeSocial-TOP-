import { render, fireEvent } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";
import Post from './post'
import { BrowserRouter } from 'react-router-dom'


describe('Post renderiza corretamente', () => {
    it('renderiza seu titulo', () => {
        const { getByText, getByLabelText, getByTestId } = (
            render(<BrowserRouter ><Post post={testPost} /></BrowserRouter >)
        );
        const content = getByTestId('post-content');
        expect(content).toHaveTextContent('Test title')
    })

    it('renderiza seu conteudo', () => {
        const { getByText, getByLabelText, getByTestId } = (
            render(<BrowserRouter ><Post post={testPost} /></BrowserRouter >)
        );
        const content = getByTestId('post-content');
        expect(content).toHaveTextContent('This is a Test')
    })

    it('renderiza likes', () => {
        const { getByText, getByLabelText, getByTestId } = (
            render(<BrowserRouter ><Post post={testPost} /></BrowserRouter >)
        );
        const content = getByTestId('post-content'); 
        expect(content).toHaveTextContent('8')
    })

    it('renderiza comentarios', () => {
        const { getByText, getByLabelText, getByTestId } = (
            render(<BrowserRouter ><Post post={testPost} /></BrowserRouter >)
        );
        const content = getByTestId('post-content');
        expect(content).toHaveTextContent('Test title')
    })
})

describe('Post nao Renderiza sem props corretos', () => {

    it('não renderiza com props vazios', () => {
        const { queryByTestId } = (
            render(<Post post='' />)
        );
        const content = queryByTestId('post');
        expect(content).toBeNull()
    })

    it('não renderiza sem props', () => {
        const { queryByTestId } = (
            render(<Post />)
        );
        const content = queryByTestId('post');
        expect(content).toBeNull()
    })
})



const testPost = {
    post_id: 0,
    user_id: 0,
    user: {
        id: 99,
        name: "test - user",
        user_name: "test - username",
        password: "test",
        profile_pic: "https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg",
        online: false,
        gaming_now: false,
        level: 0,
        favorite_games: [],
        friends: []
    },
    likes: 8,
    shares: 3,
    game_id: 2,
    game_name: null,
    game: {
        id: 1,
        title: "test game name",
        developer: "test dev",
        release_date: "test release date",
        thumbnail: "/src/imagens/imagensGames/pubgImage.jpg",
        description: "test game description",
        steam_profile: "",
        tags: ""
    },
    review: true,
    review_stars: 3,
    title: "Test title ",
    date: "29/08/2032",
    imgPost: "",
    content: "This is a Test",
    comments: []
}
