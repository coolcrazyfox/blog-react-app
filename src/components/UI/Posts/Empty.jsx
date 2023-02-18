import React from 'react';
import s from "../../../styles/BlogsList.module.css";

const Empty = () => {
    const styleEmpty={
        display: 'flex',
        fontSize: '1.5rem',
        width: '80%',
        justifyContent: 'flex-start',
        alignItems: 'start',
        margin: '3%',
        color: '#ebedf1',
        textTransform: 'uppercase',
        transition: '.5s',
        cursor: 'none',
    }
    return (
        <>
            <h1 className={s.empty}
                style= {styleEmpty}>
                post form is empty or not found
             </h1>
        </>
    );
};

export default Empty;
