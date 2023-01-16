import React from 'react';
import s from '../styles/Hero.module.css'
import NavBar from "../components/NavBar";
import Header from "../components/Header";


const Hero = () => {
    return (
        <div className={s.main_container}>

            <Header/>
            <NavBar/>


        </div>
    );
};

export default Hero;
