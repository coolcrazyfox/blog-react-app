import React from 'react';
import s from '../../../styles/BlogsList.module.css'
import Blog from "./Blog";
import SuperButton from "../SuperButton/SuperButton";

const BlogsList = ({blogs, setModal, remove,}) => {
    // const [loading, setLoading]=useState(true)
    const skeletonImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'
    // const skeletonImage='http://pngimagesfree.com/frame/Polaroid/polaroid-photo-frame-transparent-png_pngimagesfree.png'
    // if(!blogs.length){
    //     return (
    //         <h1 className={s.empty}> blog form is empty or not found</h1>
    //     )
    // }


    return (
        <div className={s.blogs}>
            <div className={s.box}>
                <div className={s.container_items}>
                    <SuperButton>
                        <span onClick={() => setModal(true)}>
                            Create a new blog
                        </span>
                    </SuperButton>
                    {blogs.length
                        ?<>
                            {blogs.map( blog =>(
                                <Blog
                                    key={blog.id}
                                    blog={blog}
                                    remove={remove}
                                />)
                            )}
                        </>
                        :<h1 className={s.empty}> blog form is empty or not found</h1>}
                </div>

            </div>

        </div>
    );
};

export default BlogsList;