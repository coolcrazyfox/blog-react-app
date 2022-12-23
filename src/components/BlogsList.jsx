import React from 'react';
import s from '../styles/BlogsList.module.css'
import Blog from "./Blog";
import SuperButton from "./UI/SuperButton/SuperButton";

const BlogsList = ({tasks, setModal, remove,}) => {
    // const [loading, setLoading]=useState(true)
    const skeletonImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'
    // const skeletonImage='http://pngimagesfree.com/frame/Polaroid/polaroid-photo-frame-transparent-png_pngimagesfree.png'


    return (
        <div className={s.blogs}>
            <div className={s.box}>
                <div className={s.container_items}>
                    <SuperButton>
                        <span onClick={() => setModal(true)}>
                            Create a new blog
                        </span>
                    </SuperButton>

                    {tasks.map( blog =>(
                        <Blog
                            key={blog.id}
                            blog={blog}
                            remove={remove}
                        />)
                    )}
                    {tasks.length!==0
                        ?<div></div>
                        :<h1> className={s.empty}> blog form is empty</h1>}
                </div>

            </div>

        </div>
    );
};

export default BlogsList;
