import React, {useState} from 'react';
import s from "../styles/Posts.module.css";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import PostsPanel from "../components/UI/Posts/PostsPanel";
import PostsList from "../components/UI/Posts/PostsList";
import {usePosts} from "../hooks/usePosts";
import SuperModal from "../components/UI/SuperModal/SuperModal";
import PostForm from "../components/UI/Posts/PostForm";
import { themes } from './Hero';
import { ThemeProvider } from 'styled-components';

export const initialPosts = [
    {
        id: 1,
        image: 'https://st2.depositphotos.com/2001755/8564/i/450/depositphotos_85647140-stock-photo-beautiful-landscape-with-birds.jpg',
        text: 'The best blog in our village',
        title: "Let's fly into space",
        date: '2022-11-19'
    },
    {
        id: 2,
        image: 'https://st2.depositphotos.com/2001755/5443/i/600/depositphotos_54431143-stock-photo-beautiful-landscape.jpg',
        text: 'IT industry',
        title: "I'm sitting at work",
        date: '2022-11-19'
    },
    {
        id: 3,
        image: 'https://static8.depositphotos.com/1017908/938/i/450/depositphotos_9385411-stock-photo-dramatic-clouds-with-mountain-and.jpg',
        text: 'Blog of beauties',
        title: "I sell cosmetics",
        date: '2022-11-20'
    },
    {
        id: 4,
        image: 'https://st2.depositphotos.com/2001755/5967/i/450/depositphotos_59677045-stock-photo-beautiful-landscape.jpg',
        text: 'The best blog in our village',
        title: "I'm happy like a child",
        date: '2022-11-22'
    },
    {
        id: 5,
        image: 'https://picsy.ru/images/photos/1200/1/foto-na-avatarku-priroda-28098386.jpg',
        text: 'IT industry',
        title: "Cooking buns",
        date: '2022-11-22'
    },
    {
        id: 6,
        image: 'https://bipbap.ru/wp-content/uploads/2017/04/2-8.jpg',
        text: 'Blog of beauties',
        title: "First day at the office",
        date: '2022-11-23'
    },
]
const themesP = themes

const PostsPage = () => {
    //navBar
    const [isActive, setIsActive] = useState(false)  
    //theme
    const [theme, setTheme] = React.useState('light')  
    //modal
    const [modal, setModal] = useState(false)
    //initial tasks
    const [posts, setPosts] = useState(initialPosts)
    //select
    const arOptions = [ 'New posts first', 'Old posts first'];
    const defaultSelectValue = arOptions[0]
    const selectValue = [
        {value: 'title', name: 'New posts first'},
        {value: 'text', name: 'Old posts first'},


    ]

    //search
    const [filter, setFilter]=useState({sort: '', query: ''})

    // add new post
    const createNewPost = (newPost) => {
        setPosts([...posts, newPost])
        console.log('input', newPost)
    }
    //remove post
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    //sort posts by select values
    const sortedAndSearchedPosts=usePosts(posts, filter.sort, filter.query)
    const activeModal=()=>{
        setModal(true)
    }
    return (
        <div className={theme==='light'? s.main_container : s.main_container_dark}>
            <ThemeProvider theme={themesP[theme]}>
                <Header theme={theme} setTheme={setTheme}/>
                <PostsPanel
                filter={filter}
                setFilter={setFilter}
                options={selectValue}
                theme={theme}                
                />
                <NavBar theme={theme}  isActive={isActive} setIsActive= {setIsActive}/>
            
                <PostsList
                    // posts={posts}
                    posts={sortedAndSearchedPosts}
                    remove={removePost}
                    onClicked={activeModal}
                    theme={theme}    
                >
                    <SuperModal visible={modal} setVisible={setModal}>
                        <PostForm create={createNewPost}/>

                    </SuperModal>
                </PostsList>
                <Footer theme={theme} />
            </ThemeProvider>             
        </div>
    );
};

export default PostsPage;