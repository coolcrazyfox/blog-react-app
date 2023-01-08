import React, {useState} from 'react';
import TestInput from "./TestInput";
import TestButton from "./TestButton";

const TestForm = ({create}) => {
    const [post, setPost] = React.useState({image:'',title:'', text:'', date:''})
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
                onChange={e => setPost({...post, title: e.target.value})}
                type={'text'}
                placeholder={'image'}
            />
            <TestInput
                value={post.image}
                onChange={e => setPost({...post, title: e.target.value})}
                type={'text'}
                placeholder={'title'}
            />
            <TestInput
                value={post.image}
                onChange={e => setPost({...post, title: e.target.value})}
                type={'text'}
                placeholder={'text'}
            />
            <TestInput
                value={post.image}
                onChange={e => setPost({...post, title: e.target.value})}
                type={'text'}
                placeholder={'date'}
            />
            <TestButton
                onClick={addNewPost}
            >
                Add
            </TestButton>

        </form>
    );
};

export default TestForm;
