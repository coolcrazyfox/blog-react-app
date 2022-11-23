import React from 'react';
import s from "../styles/DetailsPost.module.css";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import InfoPanel from "../components/InfoPanel";
import DetailPostBlock from "../components/DetailPostBlock";

const DetailsPost = () => {
    return (
        <div className={s.main_container}>
            <Header/>
            <NavBar/>
            <InfoPanel/>
            <DetailPostBlock/>
            <Footer/>
        </div>
    );
};

export default DetailsPost;
