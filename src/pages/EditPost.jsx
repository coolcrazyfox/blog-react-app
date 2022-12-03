import React from 'react';
import s from "../styles/DetailsPost.module.css";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import InfoPostsPanel from "../components/InfoPostsPanel";
import EditPostBlock from "../components/EditPostBlock";

const EditPost = () => {
    return (
        <div className={s.main_container}>
            <Header/>
            <NavBar/>
            <InfoPostsPanel/>
            <EditPostBlock/>
            <Footer/>
        </div>
    );
};

export default EditPost;
