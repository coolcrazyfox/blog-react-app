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
                    <option value="Old blogs first">Old blogs first</option>
                    <option value="From A to Z">From A to Z</option>
                    <option value="From Z to A">From Z to A</option>
                </select>

            </div>

        </div>
    );
};

export default Search;
