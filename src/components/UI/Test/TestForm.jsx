import React, {useState} from 'react';
import TestInput from "./TestInput";
import TestButton from "./TestButton";
import s from "../../../styles/Search.module.css";
import {AiOutlineClear} from "react-icons/ai";

const TestForm = ({create}) => {
    const [post, setPost] = useState({image:'',title:'', text:'', date:''})
    // const [test, setTest]=useState({image:'',title:'', text:'', date:''})


    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({image:'',title:'', text:'', date:''})
    }
    return (
        <form>
            <TestInput
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

            <TestInput
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

            <TestInput
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

            <TestInput
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

            <TestButton
                onClick={addNewPost}
            >
                Add
            </TestButton>

        </form>
    );
};

export default TestForm;
