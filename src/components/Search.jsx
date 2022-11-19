import React, {useState} from 'react';
import s from '../styles/Search.module.css'
import Select from "./Select";
import {ImSearch} from "react-icons/im";
import {AiOutlineClear} from "react-icons/ai";
const Search = () => {
    const [carList, setCarList]= useState([])
    const [searchTerm, setSearchTerm]= useState('')
    // const handlerEnterSearch =(event)=>{
    //     if (event.key ==="Enter" || event.onClick){
    //         console.log(searchTerm)
    //         alert(searchTerm)
    //     }
    // }
    return (
        <div className={s.search}>
            <div className={s.title}> Blogs</div>
            <div className={s.search_box}>
                <div className={s.search_input_form}>
                    <span className={s.loop}>
                        <ImSearch/>
                    </span>
                    <input className={s.input}
                           autoFocus
                           autoComplete={'off'}
                           type="text"
                           value={searchTerm}
                           placeholder={"Search"}
                           onChange={(e) =>setSearchTerm(e.target.value)}
                    />
                    {searchTerm &&(
                        <span className={s.clear}>
                            <AiOutlineClear onClick={()=>setSearchTerm('')}/>
                        </span>
                    )
                    }
                </div>
                <Select/>

            </div>

        </div>
    );
};

export default Search;
