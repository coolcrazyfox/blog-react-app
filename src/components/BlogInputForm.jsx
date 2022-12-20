import React from 'react';
import SuperInput from "./UI/SuperInput/SuperInput";
import SuperButton from "./UI/SuperButton/SuperButton";

const BlogInputForm = ({props}) => {
    return (
        <>
            <form >
                <SuperInput
                    value={props.image}
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
