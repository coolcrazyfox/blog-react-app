import React from 'react';
import s from '../styles/Hero.module.css'
import NavBar from "../components/NavBar";

const Hero = () => {
    return (
        <div className={s.main_container}>
            <NavBar/>
            <div className={s.box}>

            </div>

        </div>
    );
};

export default Hero;
