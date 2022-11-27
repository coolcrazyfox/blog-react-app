import React from 'react';
import {Link} from "react-router-dom";
import s from '../styles/Menu.module.css'

const Menu = ({header, items}) => {
    return (
        <div className={s.menu}>
            <div className={s.blur}></div>
            <div className={s.menu_content}>
                <div className={s.menu_header}>{header}</div>
                <ul>
                    {items.map(item=>
                    <li>
                        <Link>{item.value}</Link>
                        <span className={s.icons}>{item.icon}</span>
                    </li>)}
                </ul>
            </div>


        </div>
    );
};

export default Menu;
