import React, {useMemo, useState, useEffect} from 'react';
// import { uuid } from 'uuidv4';
import s from "../styles/Blogger.module.css";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Search from "../components/Search";
import BlogsList from "../components/UI/Blogs/BlogsList";
import Footer from "../components/Footer";
import SuperModal from "../components/UI/SuperModal/SuperModal";
import BlogForm from "../components/UI/Blogs/BlogForm";
import {useBlogs} from "../hooks/useBlogs";
import axios from "axios";
import { themes } from './Hero';
import { ThemeProvider } from 'styled-components';
import PostService from './../API/PostService';



export const initialTasks = [
    {
        id: 1,
        image: 'https://st2.depositphotos.com/2001755/8564/i/450/depositphotos_85647140-stock-photo-beautiful-landscape-with-birds.jpg',
        name: 'The best blog in our village',
        websiteUrl: 'https://www.youtube.com/',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ',
        createdAt: '2022-11-20'
    },
    {
        id: 2,
        image: 'https://st2.depositphotos.com/2001755/5443/i/600/depositphotos_54431143-stock-photo-beautiful-landscape.jpg',
        name: 'Warriors',
        websiteUrl: 'https://www.youtube.com/',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ',
        createdAt: '2022-11-19'
    },
    {
        id: 3,
        image: 'https://static8.depositphotos.com/1017908/938/i/450/depositphotos_9385411-stock-photo-dramatic-clouds-with-mountain-and.jpg',
        name: 'Audience Platform',
        websiteUrl: 'https://www.youtube.com/',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ',
        createdAt: '2022-11-21'
    },
    {
        id: 4,
        image: 'https://st2.depositphotos.com/2001755/5967/i/450/depositphotos_59677045-stock-photo-beautiful-landscape.jpg',
        name: 'Audience Platform',
        websiteUrl: 'https://www.youtube.com/',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ',
        createdAt: '2022-11-20'
    },
]
const themesB = themes

const Blogger = () => {
    //navBar
    const [isActive, setIsActive] = useState(false)  
    //theme
    const [theme, setTheme] = React.useState('light')  
    //modal
    const [modal, setModal] = useState(false)
    //initial tasks
    const [blogs, setBlogs] = useState(initialTasks)
    // const [blogs, setBlogs] = useState([])

    //select
    const selectValue = [
        {value: 'createdAt', name: 'New blogs first'},
        {value: 'createdAt', name: 'Old blogs first'},
        {value: 'name', name: 'From A to Z'},
        {value: 'name', name: 'From Z to A'},

    ]
    const arOptions = ['New blogs first', 'Old blogs first', 'From A to Z', 'From Z to A'];
    const defaultSelectValue = arOptions[0]
    // const [text, setText] = useState('')
    // const [selectedSort, setSelectedSort] = useState('')
    // const [searchQuery, setSearchQuery] = useState('')
    // const handlerEnterSearch = (e) => {
    //     setFilter(e.target.value)
    //
    // }
    // const handleSearchChange = (text) => {
    //     text.preventDefault()
    //     setText(text)
    // }

    //search
    const [filter, setFilter]=useState({sort: '', query: ''})

    // get blogs
    // useEffect(()=>{
    //     fetchBlogs()
    // },[])

    async function fetchBlogs(){
        const response= await axios.get('https://blog-platform-for-guild.vercel.app/blogs')
        // const blogs = await PostService.getAll()
        // setBlogs(blogs)
        console.log(response.data)
        // console.log(blogs.data)

    }


    // add new blog
    const createNewBlog = (newBlog) => {
        setBlogs([...blogs, newBlog])
        console.log('input', newBlog)
    }

    //remove blog
    const removeBlog = (blog) => {
        setBlogs(blogs.filter(b => b.id !== blog.id))
    }
    //sort blogs by select values
    const sortedAndSearchedBlogs=useBlogs(blogs, filter.sort, filter.query)
    //active modal function
    const activeModal=()=>{
        setModal(true)
    }
    return (
        
        <div className={theme==='light'? s.main_container: s.main_container_dark} >
            <ThemeProvider theme={themesB[theme]}>
                <Header theme={theme} setTheme={setTheme}/>
                <NavBar theme={theme}  isActive={isActive} setIsActive= {setIsActive}/>
                <Search
                    filter={filter}
                    setFilter={setFilter}
                    options={selectValue}
                    // onChangeSearch={handlerEnterSearch}
                    // searchQuery={searchQuery}
                    // onChange={sortBlogs}
                    // value={selectedSort}
                    // setSearchQuery={setSearchQuery}
                    // defaultValue={defaultSelectValue}


                />

                <BlogsList
                    // blogs={blogs}
                    blogs={sortedAndSearchedBlogs}
                    remove={removeBlog}
                    onClicked={activeModal}                
                    // blogs={sortedBlogs}
                >
                    <SuperModal visible={modal} setVisible={setModal}>
                        <BlogForm create={createNewBlog}/>

                    </SuperModal>
                </BlogsList>
                <Footer theme={theme}
                    onClick={fetchBlogs} 

                    />
               
            
               
            </ThemeProvider> 


            
    </div>
        

        
      
    );
};

export default Blogger;
