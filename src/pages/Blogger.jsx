import React from 'react';
import s from "../styles/Blogger.module.css";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Search from "../components/Search";
import BlogsList from "../components/BlogsList";
import Footer from "../components/Footer";

const Blogger = () => {
    return (
        <div className={s.main_container}>
            <Header/>
            <NavBar/>
            <Search/>
            <BlogsList/>
            <Footer/>
        </div>
    );
};

export default Blogger;
