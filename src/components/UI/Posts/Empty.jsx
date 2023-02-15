import React from 'react';
import s from "../../../styles/BlogsList.module.css";

const Empty = () => {
    return (
        <>
            <h1 className={s.empty}> post form is empty or not found</h1>
        </>
    );
};

export default Empty;
