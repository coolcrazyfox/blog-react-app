import React from 'react';
import Test from "./Test";
import TestButton from "./TestButton";

const TestsList = ({posts, onClick}) => {
    return (
        <div style={{margin:'10px'}}>
            <TestButton onClick={onClick}>Create</TestButton>
            {posts.map(post=>(
                <Test post={post} key={post.id}/>)
            )}

        </div>
    );
};

export default TestsList;
