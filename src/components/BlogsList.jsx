import React from 'react';
import s  from '../styles/BlogsList.module.css'
import Blog from "./Blog";
const BlogsList = ({tasks}) => {
    return (
        <div className={s.blogs}>
            <div className={s.box}>
                <div className={s.container_items}>
                    <Blog tasks={tasks}/>
                </div>
            </div>
        </div>
    );
};

export default BlogsList;
