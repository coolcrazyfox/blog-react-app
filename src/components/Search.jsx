import React from 'react';
import s from '../styles/Search.module.css'
const Search = () => {
    return (
        <div className={s.search}>
            <div className={s.title}> Blogs</div>
            <div className={s.search_box}>
                <input type="text"
                placeholder={"Search"}/>
                <select>
                    <option selected value="New blogs first">New blogs first</option>
                    <option value="New blogs last">New blogs last</option>
                    <option value="Last blogs first">Last blogs first</option>
                    <option value="Last blogs last">Last blogs last</option>
                </select>

            </div>

        </div>
    );
};

export default Search;
