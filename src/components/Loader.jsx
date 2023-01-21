import React from 'react';
import s from '../styles/Preloader.module.css'
const Loader = () => {
    return (
        <div className={s.loader_box}>
            <div className={s.loader_line}></div>
            {/*<div className={s.image_loading}></div>*/}
        </div>
    );
};

export default Loader;
