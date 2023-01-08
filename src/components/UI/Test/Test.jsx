import React from 'react';

const Test = ({post}) => {
    return (
        <div style={{display:'flex', flexDirection:'column' }}>
            <div style={{display:'flex', flexDirection:'row'}}>
                <img src={post.image} alt="img" style={{display:'flex',margin: '10px', width:'55px', height:'55px', backgroundSize: 'cover'}}/>
                <div style={{display:'flex', flexDirection:'column', margin: '5px', fontSize:'1rem' }}>
                    <div>{post.title}</div>
                    <div>{post.text}</div>
                    <div>{post.date}</div>
                </div>

            </div>



        </div>
    );
};

export default Test;
