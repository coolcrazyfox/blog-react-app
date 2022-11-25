import React, {useState} from 'react';
import s from "../styles/NavBar.module.css";
import {Link} from "react-router-dom";
import {initialState} from "./NavBar";

const NavBarList = ({handleClick}) => {

    return (
        <>
            <ul>
                {initialState.map((t) => {
                        return (
                            <li key={t.id} className={s.list}
                                onClick={handleClick}
                            >
                                {/*<li key={t.id} className={check ? s.list : `${s.list} ${s.active}` }*/}
                                {/*    // onClick={handleClick}*/}
                                {/*>*/}

                                <Link
                                    // activeClassName={s.active}
                                    className={s.a}
                                    to={t.link} style={{color: `${t.color}`}}>

                                    {t.id === 1 && (
                                        <span className={s.icon} style={{background: `${t.color}`}}>
                                                        {t.icon}
                                                </span>
                                    )}
                                    {t.id === 2 && (
                                        <span className={s.icon} style={{background: `${t.color}`}}>

                                                        {t.icon}
                                                </span>
                                    )}
                                    {t.id === 3 && (
                                        <span className={s.icon} style={{background: `${t.color}`}}>

                                                        {t.icon}
                                                </span>
                                    )}
                                    {t.id === 4 && (
                                        <span className={s.icon} style={{background: `${t.color}`}}>

                                                        {t.icon}
                                                </span>
                                    )}
                                    {t.id === 5 && (
                                        <span className={s.icon} style={{background: `${t.color}`}}>

                                                </span>
                                    )}
                                    {t.id === 6 && (
                                        <span className={s.icon} style={{background: `${t.color}`}}>

                                                        {t.icon}
                                                </span>
                                    )}
                                    <span className={s.text}>{t.title}</span>
                                </Link>
                            </li>
                        )
                    }
                )
                }


            </ul>

        </>
    );
};

export default NavBarList;
