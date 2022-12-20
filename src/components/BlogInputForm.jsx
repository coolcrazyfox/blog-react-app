import React from 'react';
import SuperInput from "./UI/SuperInput/SuperInput";
import SuperButton from "./UI/SuperButton/SuperButton";

const BlogInputForm = ({blog, setBlog, onChange, image, setImage, tasks, setTasks}) => {
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
                {/*<SuperInput*/}
                {/*    type={'text'}*/}
                {/*    placeholder={"Image link"}*/}
                {/*    value={blog.image}*/}
                {/*    onCnange={e => setImage(e.target.value)}*/}
                {/*/>*/}
                <SuperInput
                    type={'text'}
                    placeholder={"Image link"}
                    value={image}
                    onCnange={e => setImage(e.target.value)}
                />
                {/*<SuperInput*/}
                {/*    type={'text'}*/}
                {/*    placeholder={"Title"}*/}
                {/*    value={blog.title}*/}
                {/*    onCnange={addNewBlog}*/}
                {/*/>*/}
                {/*<SuperInput*/}
                {/*    type={'text'}*/}
                {/*    placeholder={"Text"}*/}
                {/*    value={blog.text}*/}
                {/*    onCnange={addNewBlog}*/}
                {/*/>*/}
                {/*<SuperInput*/}
                {/*    type={'text'}*/}
                {/*    placeholder={"Website"}*/}
                {/*    value={blog.website}*/}
                {/*    onCnange={addNewBlog}*/}
                {/*/>*/}
                {/*<SuperInput*/}
                {/*    type={'text'}*/}
                {/*    placeholder={"yyyy-mm-dd"}*/}
                {/*    value={blog.date}*/}
                {/*    onCnange={addNewBlog}*/}
                {/*/>*/}
                <SuperButton
                    // onClick={addNewBlog}
                >Add</SuperButton>
            </form>

        </>
    );
};

export default BlogInputForm;
