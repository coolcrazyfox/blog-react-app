import React from 'react';
import s  from '../styles/BlogsList.module.css'
import Blog from "./Blog";
const BlogsList = () => {
    return (
        <div className={s.blogs}>
            <div className={s.box}>
                <div className={s.container_items}>
                    <Blog/>
                </div>
            </div>
        </div>
    );
};

export default BlogsList;
