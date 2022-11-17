import React from 'react';
import s from '../styles/Hero.module.css'
import NavBar from "../components/NavBar";
import Header from "../components/Header";
// import Search from "../components/Search";
// import BlogsList from "../components/BlogsList";
// import Footer from "../components/Footer";


const Hero = () => {
    return (
        <div className={s.main_container}>

            <Header/>
            <NavBar/>
            {/*<Search/>*/}
            {/*<BlogsList/>*/}
            {/*<Footer/>*/}

        </div>
    );
};

export default Hero;
