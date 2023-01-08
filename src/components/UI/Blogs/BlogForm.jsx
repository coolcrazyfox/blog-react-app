import React, {useState} from 'react';
import SuperInput from "../SuperInput/SuperInput";
import SuperButton from "../SuperButton/SuperButton";
import s from "../../../styles/Search.module.css";
import {AiOutlineClear} from "react-icons/ai";

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

        <form>
            <SuperInput
                // value={'im'}
                value={blog.image}
                onCnange={e => setBlog({...blog, image: e.target.value})}
                type={'text'}
                placeholder={"Image link"}

            />
            {blog.image && (
                <div className={s.clear}>
                    <AiOutlineClear onClick={(e) => setBlog({...blog, image: ''})}/>
                </div>
            )
            }
            <SuperInput
                value={blog.title}
                onCnange={e => setBlog({...blog, title: e.target.value})}
                type={'text'}
                placeholder={"Title"}

            />
            {blog.image && (
                <div className={s.clear}>
                    <AiOutlineClear onClick={(e) => setBlog({...blog, image: ''})}/>
                </div>
            )
            }
            <SuperInput
                value={blog.website}
                onCnange={e => setBlog({...blog, website: e.target.value})}
                type={'text'}
                placeholder={"Website"}

            />
            {blog.image && (
                <div className={s.clear}>
                    <AiOutlineClear onClick={(e) => setBlog({...blog, image: ''})}/>
                </div>
            )
            }
            <SuperInput
                value={blog.text}
                onCnange={e => setBlog({...blog, text: e.target.value})}
                type={'text'}
                placeholder={"Text"}

            />
            {blog.image && (
                <div className={s.clear}>
                    <AiOutlineClear onClick={(e) => setBlog({...blog, image: ''})}/>
                </div>
            )
            }

            <SuperInput
                value={blog.date}
                onCnange={e => setBlog({...blog, date: e.target.value})}
                type={'text'}
                placeholder={"yyyy-mm-dd"}

            />
            {blog.image && (
                <div className={s.clear}>
                    <AiOutlineClear onClick={(e) => setBlog({...blog, image: ''})}/>
                </div>
            )
            }
            <SuperButton
                onClick={addNewBlog}
            >
                Add
            </SuperButton>
        </form>


    );
};

export default BlogForm;
