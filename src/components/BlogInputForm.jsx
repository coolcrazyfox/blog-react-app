import React from 'react';
import SuperInput from "./SuperInput";
import SuperButton from "./SuperButton";

const BlogInputForm = ({...props}) => {
    return (
        <>
            <form action="#">
                <SuperInput
                    placeholder={"Image link"}
                />
                <SuperInput
                    placeholder={"Title"}
                />
                <SuperInput
                    placeholder={"Text"}
                />
                <SuperInput
                    placeholder={"Website"}
                />
                <SuperInput
                    placeholder={"yyyy-mm-dd"}
                />
                <SuperButton>Add</SuperButton>
            </form>

        </>
    );
};

export default BlogInputForm;
