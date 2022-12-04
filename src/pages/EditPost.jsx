import React, {useState} from 'react';
import s from "../styles/DetailsPost.module.css";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import InfoPostsPanel from "../components/InfoPostsPanel";
import EditPostBlock from "../components/EditPostBlock";
import {initialPostsTasks} from "../components/Post";


const EditPost = () => {
    // const [selected, setSelected] = useState(0)
    // const details = initialPostsTasks
    // const sortDetails = details[selected]
    // const onClickListItem = (i) => {
    //     setSelected(i)
    // }
    return (
        <div className={s.main_container}>
            <Header/>
            <NavBar/>
            <InfoPostsPanel/>
            <EditPostBlock
                // onClickListItem={onClickListItem}
                // details={details}
                // sortDetails={sortDetails}
            />
            <Footer/>
        </div>
    );
};

export default EditPost;
