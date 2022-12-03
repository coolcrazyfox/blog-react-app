import React from 'react';
import s from "../styles/DetailsPost.module.css";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import DetailPostBlock from "../components/DetailPostBlock";
import InfoPostsPanel from "../components/InfoPostsPanel";

const DetailsPost = () => {
    return (
        <div className={s.main_container}>
            <Header/>
            <NavBar/>
            <InfoPostsPanel/>
            <DetailPostBlock/>
            <Footer/>
        </div>
    );
};

export default DetailsPost;
