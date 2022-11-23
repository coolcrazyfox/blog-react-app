import React from 'react';
import s  from '../styles/PostsList.module.css'
import Blog from "./Blog";
import Post from "./Post";
const PostsList = () => {
    return (
        <div className={s.blogs}>
            <div className={s.box}>
                <div className={s.container_items}>
                    <Post/>
                </div>
            </div>
        </div>
    );
};

export default PostsList;
