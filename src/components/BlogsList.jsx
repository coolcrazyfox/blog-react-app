import React, {useState} from 'react';
import s  from '../styles/BlogsList.module.css'
import Blog from "./Blog";
import SuperModal from "./SuperModal";
import SuperButton from "./SuperButton";
import SuperInput from "./SuperInput";
const BlogsList = ({tasks, setModal}) => {


    return (
        <div className={s.blogs}>
            <div className={s.box}>
                <div className={s.container_items}>
                    <SuperButton ><span onClick={()=>setModal(true)}>Create a new blog</span></SuperButton>
                    <Blog tasks={tasks}/>
                </div>

            </div>

        </div>
    );
};

export default BlogsList;
