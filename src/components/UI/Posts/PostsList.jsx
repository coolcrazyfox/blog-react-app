import React from 'react';
import s  from '../../../styles/PostsList.module.css'
import Post from "./Post";
import SuperButton from "../SuperButton/SuperButton";
const PostsList = ({children ,posts, onClick, remove}) => {
    return (
        <div className={s.posts}>
            <div className={s.box}>
                <div>
                    <SuperButton onClick={onClick}>
                        <span >
                            Create a new post
                        </span>
                    </SuperButton>
                </div>
                <div className={s.container_items}>
                    <Post/>
                </div>
            </div>
        </div>
    );
};

export default PostsList;
