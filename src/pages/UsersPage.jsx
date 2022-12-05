import React, {useState} from 'react';
import s from '../styles/UsersPage.module.css'
import SuperButton from "../components/SuperButton";

import {SiApostrophe,SiMicrodotblog, SiPostman} from "react-icons/si";
import Menu from "../components/Menu";
const UsersPage = () => {
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
    return (
        <div className={s.mainn}>
            <form className={s.form}>
                <SuperButton> send</SuperButton>
                <SuperButton> cancel</SuperButton>




            </form>
            {/*<div>*/}
            {/*    <button className={s.main_btn} onClick={()=>setMenuActive(!menuActive)}>x</button>*/}
            {/*</div>*/}

            {/*<Menu items={items} header={'Menu'}  active={menuActive} setActive={setMenuActive}/>*/}


        </div>
    );
};

export default UsersPage;
