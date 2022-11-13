import React from 'react';
import s from '../styles/Hero.module.css'
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Search from "../components/Search";
import Blogs from "./Blogs";
import BlogsList from "../components/BlogsList";
import Footer from "../components/Footer";

const Hero = () => {
    return (
        <div className={s.main_container}>
            <Header/>
            <NavBar/>
            <Search/>
            <BlogsList/>
            <div className={s.box}>

            </div>
            <Footer/>

        </div>
    );
};

export default Hero;
