import React, {useState} from 'react';
import s from '../styles/UsersPage.module.css'
import SupperButton from "../components/SupperButton";
import NavBarList from "../components/NavBarList";
import {SiAbbvie, SiAcer, SiApostrophe} from "react-icons/si";
const UsersPage = () => {
    const items=[
        {value:'Home', href:'/', icon:<SiApostrophe/>},
        {value:'Blogs', href:'/blogs', icon:<SiAbbvie/>},
        {value:'Posts', href:'/posts', icon:<SiAcer/>},

    ]

    const [active, setActive] = useState(0)
    const title = ['blogs', 'posts',' details']
    const handleOnClick = (index) => {
        setActive(index)

    }
    return (
        <div className={s.mainn}>
            <NavBarList/>
            {/*<ul>*/}
            {/*    {title.map((t, i) => (*/}
            {/*        <li*/}
            {/*            className={active === i ? `${s.active}` : ''}*/}
            {/*            onClick={() => handleOnClick(i)}*/}
            {/*        >*/}
            {/*            <SupperButton label={t}/>*/}
            {/*            /!*{t}*!/*/}
            {/*        </li>*/}
            {/*    ))}*/}
            {/*</ul>*/}
            {/*/!*<div className={s.btn_box}>*!/*/}
            {/*/!*    <SupperButton/>*!/*/}
            {/*/!*</div>*!/*/}

        </div>
    );
};

export default UsersPage;
