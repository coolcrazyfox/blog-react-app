import React, {useState} from 'react';
import s from '../styles/Search.module.css'
import SuperSelect from "./UI/SuperSelect/SuperSelect";
import {ImSearch} from "react-icons/im";
import {AiOutlineClear} from "react-icons/ai";
import {initialState} from "./NavBar";
import SuperInput from "./UI/SuperInput/SuperInput";
const Search = ({options, filter, setFilter}) => {
    const [inform,setInform]=useState(initialState)
    const info = inform[1]
    const [carList, setCarList]= useState([])

    // const handlerEnterSearch =(e)=>{
    //     setSearchTerm(e.target.value)
    //     onChange(e.target.value)
    //     // console.log(searchTerm)
    //     // onChange(e.target.value)
    //     if (e.key ==="Enter" || e.onClick){
    //         console.log(searchTerm)
    //         onChange(searchTerm)
    //     }
    // }

    return (
        <div className={s.search}>
            <div className={s.title}> {info.title}</div>
            {/*<div className={s.title}> {title}</div>*/}
            <div className={s.search_box}>
                <div className={s.search_input_form}>
                    <SuperInput
                        value={filter.query}
                        onChange={e=>setFilter({...filter, query: e.target.value})}
                        type="text"
                        placeholder={"Search"}
                        // setSearchQuery={setSearchQuery}
                    />
                    {/*<span className={s.loop}>*/}
                    {/*    <ImSearch/>*/}
                    {/*</span>*/}
                    {/*<input className={s.input}*/}
                    {/*       autoFocus*/}
                    {/*       // autoComplete={'off'}*/}
                    {/*       type="text"*/}
                    {/*       value={searchTerm}*/}
                    {/*       placeholder={"Search"}*/}
                    {/*       onChange={handlerEnterSearch}*/}
                    {/*       // onChange={(e) =>setSearchTerm(e.target.value)}*/}
                    {/*/>*/}
                    {filter.query &&(
                        <div className={s.clear}>
                            <AiOutlineClear onClick={(e)=>setFilter({...filter, query:''})}/>
                        </div>
                    )
                    }
                </div>
                <SuperSelect
                    options={options}
                    value={filter.sort}
                    onChange={selectedSort=> setFilter({...filter, sort: selectedSort})}
                />
            </div>

        </div>
    );
};

export default Search;
