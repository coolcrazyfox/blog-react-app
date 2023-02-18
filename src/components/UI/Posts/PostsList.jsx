import React from 'react';
import s  from '../../../styles/PostsList.module.css'
import Post from "./Post";
import SuperButton from "../SuperButton/SuperButton";
import Empty from "./Empty";


const PostsList = ({children ,posts, onClicked, remove, theme}) => {
    return (
        <div className={s.posts}>
            <div className={theme ==='light' ? s.box: s.box_dark}>
                <div className= {s.posts_form}>
                    <div className= {s.btn_container}>
                        <SuperButton onClick={onClicked}>
                            <span >
                                Create a new post
                            </span>
                        </SuperButton>
                    </div>
                    <div className={s.container_items}>
                        {posts.length 
                            ? 
                                    <Post 
                                        posts= {posts}
                                        remove= {remove}
                                    />                                
                           
                            : <Empty/>                            
                        }
                        
                    </div>

                    {children}

                </div>  
                
            </div>
        </div>
    );
};

export default PostsList;
