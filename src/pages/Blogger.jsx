import React, {useState} from 'react';
import s from "../styles/Blogger.module.css";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Search from "../components/Search";
import BlogsList from "../components/BlogsList";
import Footer from "../components/Footer";

const Blogger = () => {
    const [title, setTitle]= useState('')
    const [text, setText]= useState('')
    // const handleTitleChange=(title)=>{
    //     setTitle(title)
    // }
    const handleSearchChange=(text)=>{
        setText(text)
    }
    return (
        <div className={s.main_container}>
            <Header text={text}/>
            <NavBar
                // onClick={handleTitleChange}
            />
            <Search  setSearchTerm={handleSearchChange}/>
            <BlogsList/>
            <Footer/>
        </div>
    );
};

export default Blogger;
