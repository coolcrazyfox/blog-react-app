import React, {useState} from 'react';
import SuperInput from "../SuperInput/SuperInput";
import SuperButton from "../SuperButton/SuperButton";
import s from "../../../styles/BlogForm.module.css";
import {AiOutlineClear} from "react-icons/ai";
import SuperTextarea from '../SuperTextarea/SuperTextarea';


const BlogForm = ({create}) => {
    const [blog, setBlog] = useState({image: '', title: '', website: '', text: '', date: ''})
    // useEffect(() => {
    //     const timer = setTimeout(() => console.log('test'), 4000)
    //     return () => clearTimeout(timer)
    // }, [])
    const addNewBlog = (e) => {
        e.preventDefault()
        const newBlog = {
            ...blog, id: Date.now()
        }
        create(newBlog)
        setBlog({image: '', title: '', website: '', text: '', date: ''})

    }
    return (

        <form  className={s.form}>
            <div className={s.form_container} >
                <SuperInput
                    value={blog.image}
                    onChange={e => setBlog({...blog, image: e.target.value})}
                    type={'text'}
                    placeholder={"Image link"}

                />

                {blog.image && (
                    <div className={s.clear} >
                        <AiOutlineClear onClick={(e) => setBlog({...blog, image: ''})}/>
                    </div>
                )
                }

            </div>

            <div className={s.form_container} >
                <SuperInput
                    value={blog.title}
                    onChange={e => setBlog({...blog, title: e.target.value})}
                    type={'text'}
                    placeholder={"Title"}

                />
                {blog.title && (
                    <div className={s.clear}>
                        <AiOutlineClear  onClick={(e) => setBlog({...blog, title: ''})}/>
                    </div>
                )
                }

            </div>

            <div className={s.form_container} >
                <SuperInput
                    value={blog.website}
                    onChange={e => setBlog({...blog, website: e.target.value})}
                    type={'text'}
                    placeholder={"Website"}

                />
                {blog.website && (
                    <div className={s.clear}>
                        <AiOutlineClear onClick={(e) => setBlog({...blog, website: ''})}/>
                    </div>
                )
                }
            </div>

            <div className={s.form_container} >
                <SuperTextarea 
                     value={blog.text}
                    onChange={e => setBlog({...blog, text: e.target.value})}
                    type={'text'}
                    placeholder={"Text"}
                />               
                {blog.text && (
                    <div className={s.clear}>
                        <AiOutlineClear onClick={(e) => setBlog({...blog, text: ''})}/>
                    </div>
                )
                }
            </div>

            <div className={s.form_container} >
                <SuperInput
                    value={blog.date}
                    onChange={e => setBlog({...blog, date: e.target.value})}
                    type={'text'}
                    placeholder={"yyyy-mm-dd"}

                />
                {blog.date && (
                    <div className={s.clear}>
                        <AiOutlineClear onClick={(e) => setBlog({...blog, date: ''})}/>
                    </div>
                )
                }
            </div>
            <SuperButton
                onClick={addNewBlog}
            >
                Add
            </SuperButton>
        </form>


    );
};

export default BlogForm;
