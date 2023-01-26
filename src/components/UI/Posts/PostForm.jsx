import React, {useState} from 'react';
import {AiOutlineClear} from "react-icons/ai";
import s from "../../../styles/BlogForm.module.css";
import SuperInput from "../SuperInput/SuperInput";
import SuperButton from "../SuperButton/SuperButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({image:'',title:'', text:'', date:''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({image:'',title:'', text:'', date:''})
    }
    return (
        <form className={s.form}>
            <div className={s.form_container}>
                <SuperInput
                    value={post.image}
                    onChange={e => setPost({...post, image: e.target.value})}
                    type={'text'}
                    placeholder={'image'}
                />
                {post.image && (
                    <div className={s.clear}>
                        <AiOutlineClear onClick={(e) => setPost({...post, image: ''})}/>
                    </div>
                )
                }

            </div>

            <div className={s.form_container}>
                <SuperInput
                    value={post.title}
                    onChange={e => setPost({...post, title: e.target.value})}
                    type={'text'}
                    placeholder={'title'}
                />
                {post.title && (
                    <div className={s.clear}>
                        <AiOutlineClear onClick={(e) => setPost({...post, title: ''})}/>
                    </div>
                )
                }

            </div>


            <div className={s.form_container}>
                <SuperInput
                    value={post.text}
                    onChange={e => setPost({...post, text: e.target.value})}
                    type={'text'}
                    placeholder={'text'}
                />
                {post.text && (
                    <div className={s.clear}>
                        <AiOutlineClear onClick={(e) => setPost({...post, text: ''})}/>
                    </div>
                )
                }

            </div>


            <div className={s.form_container}>
                <SuperInput
                    value={post.date}
                    onChange={e => setPost({...post, date: e.target.value})}
                    type={'text'}
                    placeholder={'date'}
                />
                {post.date && (
                    <div className={s.clear}>
                        <AiOutlineClear onClick={(e) => setPost({...post, date: ''})}/>
                    </div>
                )
                }

            </div>



            <SuperButton
                onClick={addNewPost}
            >
                Add
            </SuperButton>

        </form>
    );
};

export default PostForm;
