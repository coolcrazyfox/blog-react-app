import React, {useState} from 'react';
import axios from "axios";

import {usePosts} from "../hooks/usePosts";
import BlogsList from "../components/BlogsList";
import BlogForm from "../components/BlogForm";
import Search from "../components/Search";


export const initialPosts = [
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

const Settings = () => {
    //modal
    const [modal, setModal] = useState(false)
    //initial tasks
    const [posts, setPosts] = useState(initialPosts)
    //select
    const selectTerm= [
        {value: 'image', name: 'New blogs first'},
        {value: 'text', name: 'Old blogs first'},
        {value: 'title', name: 'From A to Z'},
        {value: 'website', name: 'From Z to A'},

    ]
    const arOptions = ['New blogs first', 'Old blogs first', 'From A to Z', 'From Z to A'];
    const defaultSelectValue = arOptions[0]

    //search
    const [filter, setFilter]=useState({sort: '', query: ''})
    //get posts
    async function fetchBlogs(){
        const response= await axios.get('https://nest-blog-platform.vercel.app/blogs')
        console.log(response.data)

    }


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
    return (
        <div>
            <BlogForm create={createNewPost}/>
            <Search
                filter={filter}
                setFilter={setFilter}
                options={selectTerm}
                // onChangeSearch={handlerEnterSearch}
                // searchQuery={searchQuery}
                // onChange={sortBlogs}
                // value={selectedSort}
                // setSearchQuery={setSearchQuery}
                // defaultValue={defaultSelectValue}


            />
            <BlogsList
                blogs={sortedAndSearchedPosts}
                remove={removePost}
                setModal={setModal}
                modal={modal}
                // blogs={sortedBlogs}
            />
            <BlogForm create={createNewPost}/>

        </div>
    );
};

export default Settings;
