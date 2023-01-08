import React, {useEffect, useState} from 'react';
import SuperInput from "../SuperInput/SuperInput";
import SuperButton from "../SuperButton/SuperButton";

const BlogForm = ({create}) => {
    const [blog, setBlog] = useState({image: '', title: '', text: '',website:'', date: ''})
    useEffect(() => {
        const timer = setTimeout(() => console.log('test'), 4000)
        return () => clearTimeout(timer)
    }, [])
    const addNewBlog = (e) => {
        e.preventDefault()
        const newBlog = {
            ...blog, id: Date.now()
        }
        create(newBlog)
        setBlog({image: '', title: '', text: '',website:'', date: ''})

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
            <SuperInput
                value={blog.title}
                onCnange={e => setBlog({...blog, title: e.target.value})}
                type={'text'}
                placeholder={"Title"}

            />
            <SuperInput
                value={blog.text}
                onCnange={e => setBlog({...blog, text: e.target.value})}
                type={'text'}
                placeholder={"Text"}

            />
            <SuperInput
                value={blog.website}
                onCnange={e => setBlog({...blog, website: e.target.value})}
                type={'text'}
                placeholder={"Website"}

            />
            <SuperInput
                value={blog.date}
                onCnange={e => setBlog({...blog, date: e.target.value})}
                type={'text'}
                placeholder={"yyyy-mm-dd"}

            />
            <SuperButton
                onClick={addNewBlog}
            >
                Add
            </SuperButton>
        </form>


    );
};

export default BlogForm;
