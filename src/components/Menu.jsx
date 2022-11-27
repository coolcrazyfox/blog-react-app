import React from 'react';
import {Link} from "react-router-dom";
import s from '../styles/Menu.module.css'

const Menu = ({header, items, active, setActive}) => {
    return (
        <div className={active ? `${s.menu}${s.active}`: s.menu}>
            <div className={s.blur}></div>
            <div className={s.menu_content}>
                <div className={s.menu_header}>{header}</div>
                <ul>
                    {items.map(item=>
                    <li>
                        <Link to={item.link}>{item.value}</Link>
                        <span className={s.icons}>{item.icon}</span>
                    </li>)}
                </ul>
            </div>


        </div>
    );
};

export default Menu;
