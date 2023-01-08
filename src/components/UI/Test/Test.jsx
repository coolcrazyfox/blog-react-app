import React from 'react';

const Test = ({post}) => {
    return (
        <div style={{display:'flex',  }}>
            <div>
                <img src={post.image} alt="img"/>
            </div>
            <div>{post.title}</div>
            <div>{post.text}</div>
            <div>{post.date}</div>


        </div>
    );
};

export default Test;
