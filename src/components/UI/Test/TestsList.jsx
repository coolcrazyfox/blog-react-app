import React from 'react';
import Test from "./Test";

const TestsList = ({posts}) => {
    return (
        <div>
            {posts.map(post=>(
                <Test post={post} key={post.id}/>)
            )}

        </div>
    );
};

export default TestsList;
