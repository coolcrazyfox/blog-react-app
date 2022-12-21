import React, {useState} from 'react';
import SuperInput from "./UI/SuperInput/SuperInput";
import SuperButton from "./UI/SuperButton/SuperButton";

const BlogForm = () => {
    const  [blog, setBlog]=useState({image:'', title: '', text: '', website: '', date: '' })
    // const addNewBlog = (e) => {
    //     e.preventDefault()
    //     // const newBlog={
    //     //     // id: Date.now(),
    //     //     id: uuid(),
    //     //     image,
    //     //     title,
    //     //     text,
    //     //     website,
    //     //     date
    //     // }
    //     // setTasks([...tasks,{...blog, id:Date.now()}])
    //     // onCnange(e.target.value)
    //     // setBlog({image:'', title: '', text: '', website: '', date: '' })
    //
    // }
    return (
        <>
            <form>
                <SuperInput
                    type={'text'}
                    placeholder={"Image link"}
                    value={blog.image}
                    onCnange={e => setBlog({...blog, image:e.target.value})}
                />
                <SuperInput
                    type={'text'}
                    placeholder={"Title"}
                    value={blog.title}
                    onCnange={e => setBlog({...blog, title:e.target.value})}
                />
                <SuperInput
                    type={'text'}
                    placeholder={"Text"}
                    value={blog.text}
                    onCnange={e => setBlog({...blog, text:e.target.value})}
                />
                <SuperInput
                    type={'text'}
                    placeholder={"Website"}
                    value={blog.website}
                    onCnange={e => setBlog({...blog, website:e.target.value})}
                />
                <SuperInput
                    type={'text'}
                    placeholder={"yyyy-mm-dd"}
                    value={blog.date}
                    onCnange={e => setBlog({...blog, date:e.target.value})}
                />
                <SuperButton
                    onClick={addNewBlog}
                >Add</SuperButton>
            </form>

        </>
    );
};

export default BlogForm;
