import React from 'react';
import s from "../styles/DetailsPost.module.css";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import DetailBlock from "../components/DetailBlock";
import InfoPanel from "../components/InfoPanel";

const DetailsPost = () => {
    return (
        <div className={s.main_container}>
            <Header/>
            <NavBar/>
            <InfoPanel/>
            <DetailBlock/>
            <Footer/>
        </div>
    );
};

export default DetailsPost;
