import React from 'react';
import s from '../styles/SuperInput.module.css'
import {ImSearch} from "react-icons/im";
import {AiOutlineClear} from "react-icons/ai";
const SuperInput = () => {
    return (
        <div className={s.search_input_form}>
            <span className={s.loop}>
                        <ImSearch/>
           </span>
            <input className={s.input}
                   autoFocus
                // autoComplete={'off'}
                   type="text"
                   // value={searchTerm}
                   placeholder={"Search"}
                   // onChange={handlerEnterSearch}
                // onChange={(e) =>setSearchTerm(e.target.value)}
            />
            {/*{searchTerm &&(*/}
            {/*    <span className={s.clear}>*/}
            {/*                <AiOutlineClear onClick={()=>setSearchTerm('')}/>*/}
            {/*            </span>*/}
            {/*)*/}
            {/*}*/}
        </div>
    );
};

export default SuperInput;
