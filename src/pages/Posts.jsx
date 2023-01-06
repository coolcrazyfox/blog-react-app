import React from 'react';
import s from "../styles/Posts.module.css";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

import BlogsList from "../components/UI/Blogs/BlogsList";
import Footer from "../components/Footer";
import PostsPanel from "../components/UI/Posts/PostsPanel";
import PostsList from "../components/UI/Posts/PostsList";



const Posts = () => {
    return (
        <div className={s.main_container}>
            <Header/>
            <NavBar/>
            <PostsPanel/>
            <PostsList/>
            <Footer/>
        </div>
    );
};

export default Posts;
