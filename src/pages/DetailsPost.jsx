import React, {useState} from 'react';
import s from "../styles/DetailsPost.module.css";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import DetailPostBlock from "../components/DetailPostBlock";
import InfoPostsPanel from "../components/InfoPostsPanel";
import {initialPostsTasks} from "../components/UI/Posts/Post";


const DetailsPost = () => {
    const [selected, setSelected]=useState(0)
    const details = initialPostsTasks
    const sortDetails=details[selected]
    const onClickListItem=(i)=>{
        setSelected(i)
    }
    return (
        <div className={s.main_container}>
            <Header/>
            <NavBar/>
            <InfoPostsPanel
                sortDetails={sortDetails}
            />
            <DetailPostBlock
                onClickListItem={onClickListItem}
                details={details}
                sortDetails={sortDetails}
            />
            <Footer/>
        </div>
    );
};

export default DetailsPost;
