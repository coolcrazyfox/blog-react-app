import React from 'react';
import s from '../styles/Search.module.css'
import Select from "./Select";
const Search = () => {
    return (
        <div className={s.search}>
            <div className={s.title}> Blogs</div>
            <div className={s.search_box}>
                <input className={s.input} type="text"
                placeholder={"Search"}/>
                <Select/>

            </div>

        </div>
    );
};

export default Search;
