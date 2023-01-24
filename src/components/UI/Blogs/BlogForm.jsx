import React, {useState} from 'react';
import SuperInput from "../SuperInput/SuperInput";
import SuperButton from "../SuperButton/SuperButton";
import s from "../../../styles/Search.module.css";
import {AiOutlineClear} from "react-icons/ai";
import TestInput from "../Test/TestInput";

const BlogForm = ({create, visible, setVisible}) => {
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
        setVisible(!visible)
        setBlog({image: '', title: '', website: '', text: '', date: ''})

    }
    return (
        <>
            {visible &&<form>
                <TestInput
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
                <TestInput
                    value={blog.title}
                    onCnange={e => setBlog({...blog, title: e.target.value})}
                    type={'text'}
                    placeholder={"Title"}

                />
                {blog.title && (
                    <div className={s.clear}>
                        <AiOutlineClear onClick={(e) => setBlog({...blog, title: ''})}/>
                    </div>
                )
                }
                <TestInput
                    value={blog.website}
                    onCnange={e => setBlog({...blog, website: e.target.value})}
                    type={'text'}
                    placeholder={"Website"}

                />
                {blog.website && (
                    <div className={s.clear}>
                        <AiOutlineClear onClick={(e) => setBlog({...blog, website: ''})}/>
                    </div>
                )
                }
                <TestInput
                    value={blog.text}
                    onCnange={e => setBlog({...blog, text: e.target.value})}
                    type={'text'}
                    placeholder={"Text"}

                />
                {blog.text && (
                    <div className={s.clear}>
                        <AiOutlineClear onClick={(e) => setBlog({...blog, text: ''})}/>
                    </div>
                )
                }

                <TestInput
                    value={blog.date}
                    onCnange={e => setBlog({...blog, date: e.target.value})}
                    type={'text'}
                    placeholder={"yyyy-mm-dd"}

                />
                {blog.date && (
                    <div className={s.clear}>
                        <AiOutlineClear onClick={(e) => setBlog({...blog, date: ''})}/>
                    </div>
                )
                }
                <SuperButton
                    onClick={addNewBlog}

                >
                    Add
                </SuperButton>
            </form>
            }
        </>




    );
};

export default BlogForm;
