import React from 'react';
import s from "../styles/DetailsPost.module.css";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import InfoPanel from "../components/InfoPanel";
import DetailPostBlock from "../components/DetailPostBlock";
import Fade from "react-reveal/Fade";

const DetailsPost = () => {
    return (
        <div className={s.main_container}>
            <Header/>
            <Fade left>
                <NavBar/>
            </Fade>
            <InfoPanel/>
            <DetailPostBlock/>
            <Footer/>
        </div>
    );
};

export default DetailsPost;
