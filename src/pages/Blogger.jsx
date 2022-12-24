import React, {useMemo, useState} from 'react';
// import { uuid } from 'uuidv4';
import s from "../styles/Blogger.module.css";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Search from "../components/Search";
import BlogsList from "../components/BlogsList";
import Footer from "../components/Footer";
import SuperModal from "../components/UI/SuperModal/SuperModal";
import BlogForm from "../components/BlogForm";
import {useBlogs} from "../hooks/useBlogs";


export const initialTasks = [
    {
        id: 1,
        image: 'https://st2.depositphotos.com/2001755/8564/i/450/depositphotos_85647140-stock-photo-beautiful-landscape-with-birds.jpg',
        title: 'The best blog in our village',
        website: 'https://www.youtube.com/',
        text: 'Lorem ipsum dolor sit amet, consectet adipiscing elit...',
        date: '2022-11-19'
    },
    {
        id: 2,
        image: 'https://st2.depositphotos.com/2001755/5443/i/600/depositphotos_54431143-stock-photo-beautiful-landscape.jpg',
        title: 'Warriors',
        website: 'https://www.youtube.com/',
        text: 'Lorem ipsum dolor sit amet, consectet adipiscing elit...',
        date: '2022-11-19'
    },
    {
        id: 3,
        image: 'https://static8.depositphotos.com/1017908/938/i/450/depositphotos_9385411-stock-photo-dramatic-clouds-with-mountain-and.jpg',
        title: 'Audience Platform',
        website: 'https://www.youtube.com/',
        text: 'Lorem ipsum dolor sit amet, consectet adipiscing elit...',
        date: '2022-11-19'
    },
    {
        id: 4,
        image: 'https://st2.depositphotos.com/2001755/5967/i/450/depositphotos_59677045-stock-photo-beautiful-landscape.jpg',
        title: 'Audience Platform',
        website: 'https://www.youtube.com/',
        text: 'Lorem ipsum dolor sit amet, consectet adipiscing elit...sdfgsdgsd    ',
        date: '2022-11-19'
    },
]
const Blogger = () => {
    //modal
    const [modal, setModal] = useState(false)
    //initial tasks
    const [blogs, setBlogs] = useState(initialTasks)
    //select
    const selectValue = [
        {value: 'image', name: 'New blogs first'},
        {value: 'text', name: 'Old blogs first'},
        {value: 'title', name: 'From A to Z'},
        {value: 'website', name: 'From Z to A'},

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


    // add new blog
    const createNewBlog = (newBlog) => {
        setBlogs([...blogs, newBlog])
    }
    //remove blog
    const removeBlog = (blog) => {
        setBlogs(blogs.filter(b => b.id !== blog.id))
    }
    //sort blogs by select values
    const sortedAndSearchedBlogs=useBlogs(blogs, filter.sort, filter.query)

    return (
        <div className={s.main_container}>

            <Header/>
            <NavBar/>
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
                blogs={sortedAndSearchedBlogs}
                remove={removeBlog}
                setModal={setModal}
                modal={modal}
                // blogs={sortedBlogs}
            />
            <SuperModal visible={modal} setVisible={setModal}>
                <BlogForm create={createNewBlog}/>

            </SuperModal>

            <Footer/>
        </div>
    );
};

export default Blogger;
