import React from 'react';
import s from "../styles/Posts.module.css";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

import BlogsList from "../components/BlogsList";
import Footer from "../components/Footer";
import PostsPanel from "../components/PostsPanel";
import PostsList from "../components/PostsList";



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
