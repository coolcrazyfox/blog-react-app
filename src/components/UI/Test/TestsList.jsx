import React from 'react';
import Test from "./Test";
import TestButton from "./TestButton";
import {MdCreateNewFolder} from "react-icons/md";

const TestsList = ({posts, onClick, remove}) => {
    return (
        <div style={{margin:'10px'}}>
            <TestButton onClick={onClick}>
                <MdCreateNewFolder/>
                <br/><span>create</span>
            </TestButton>
            {posts.map(post=>(
                <Test post={post}
                      key={post.id}
                      remove={remove}
                />)
            )}

        </div>
    );
};

export default TestsList;
