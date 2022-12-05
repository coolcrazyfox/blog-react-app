import React, {useState} from 'react';
import s from '../styles/UsersPage.module.css'
import SuperButton from "../components/SuperButton";

import {SiApostrophe,SiMicrodotblog, SiPostman} from "react-icons/si";
import Menu from "../components/Menu";
import SuperInput from "../components/SuperInput";
import {AiOutlineClear} from "react-icons/ai";
const UsersPage = () => {
    const [valueTerm, setValueTerm]= useState('')
    const [bodyTerm, setBodyTerm]= useState('')
    const items=[
        {value:'Home', link:'/', icon:<SiApostrophe/>},
        {value:'Blogs', link:'/blogger', icon:<SiMicrodotblog/>},
        {value:'Posts', link:'/posts', icon:<SiPostman/>},

    ]
    const [menuActive,setMenuActive]=useState(false)
    const [active, setActive] = useState(0)
    const title = ['blogs', 'posts',' details']
    const handleOnClick = (index) => {
        setActive(index)

    }
    // add new post
    const addNewPost=(e)=>{
        e.preventDefault()
        setValueTerm(valueTerm)
        setBodyTerm(bodyTerm)
        // const newPost={
        //     id: Date.now(),
        //     valueTerm,
        //     bodyTerm
        // }
        // setPosts([...posts, newPost])
        console.log('valueTerm',valueTerm)
    }
    return (
        <div className={s.mainn}>
            <form className={s.form}>
                <div className={s.input_block}>
                    <SuperInput
                        value={valueTerm}
                        onChange={e=> setValueTerm(e.target.value)}
                        type="text"
                        placeholder={"Search"}
                    />
                    {valueTerm &&(
                        <span className={s.clear}>
                            <AiOutlineClear onClick={()=>setValueTerm('')}/>
                        </span>
                    )
                    }

                </div>
                <div className={s.input_block}>
                    <SuperInput
                        value={bodyTerm}
                        onChange={e=> setBodyTerm(e.target.value)}
                        type="text"
                        placeholder={"Details"}
                    />
                    {bodyTerm &&(
                        <span className={s.clear}>
                            <AiOutlineClear onClick={()=>setBodyTerm('')}/>
                        </span>
                    )
                    }

                </div>
                <div>
                    <button onClick={addNewPost}>send</button>
                </div>
                <div>
                    <button onClick={addNewPost}>delete</button>
                </div>


                {/*<SuperButton onClick={addNewPost}> send</SuperButton>*/}
                {/*<SuperButton> cancel</SuperButton>*/}




            </form>
            {valueTerm}
            <br/>
            {bodyTerm}
            {/*<div>*/}
            {/*    <button className={s.main_btn} onClick={()=>setMenuActive(!menuActive)}>x</button>*/}
            {/*</div>*/}

            {/*<Menu items={items} header={'Menu'}  active={menuActive} setActive={setMenuActive}/>*/}


        </div>
    );
};

export default UsersPage;
