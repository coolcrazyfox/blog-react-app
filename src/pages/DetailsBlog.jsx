import React, {useState} from 'react';
import s from "../styles/DetailsBlog.module.css";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import DetailBlock from "../components/DetailBlock";
import InfoPanel from "../components/InfoPanel";
import {initialTasks} from "../components/Blog";

const DetailsBlog = () => {
    const [selected, setSelected]=useState(0)
    const details = initialTasks
    const sortDetails=details[selected]
    const onClickListItem=(i)=>{
        setSelected(i)

    }
    return (
        <div className={s.main_container}>
            <Header/>
            <NavBar/>
            <InfoPanel
                details={details}
                sortDetails={sortDetails}/>
            <DetailBlock
                onClickListItem={onClickListItem}
                details={details}
                sortDetails={sortDetails}/>
            <Footer/>
        </div>
    );
};

export default DetailsBlog;
