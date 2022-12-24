import React, {useState} from 'react';
import s from '../../../styles/SuperInput.module.css'
import {ImSearch} from "react-icons/im";
import {AiOutlineClear} from "react-icons/ai";
const SuperInput = ({...props}) => {
    // const [valueTerm, setValueTerm]= useState('')
    return (
        <div className={s.input_form}>
            <span className={s.loop}>
                        <ImSearch/>
           </span>
            <input className={s.input}
                   {...props}
                   // autoFocus
                // autoComplete={'off'}
                //    type="text"
                   // value={searchTerm}
                   // placeholder={"Search"}
                   // onChange={handlerEnterSearch}
                // onChange={(e) =>setSearchTerm(e.target.value)}
            />

            {/*{valueTerm &&(*/}
            {/*    <span className={s.clear}>*/}
            {/*          <AiOutlineClear onClick={()=>setValueTerm('')}/>*/}
            {/*    </span>*/}
            {/*)*/}
            {/*}*/}
        </div>
    );
};

export default SuperInput;
