import React from 'react';

const TestInput = ({...props}) => {
    return (
        <>
            <input {...props}  style={{margin:'10px', width:'100px'}}/>


        </>
    );
};

export default TestInput;
