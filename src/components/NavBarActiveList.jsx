import React, {useState} from 'react';
import s from "../styles/NavBar.module.css";
import {Link} from "react-router-dom";
import {initialState} from "./NavBar";

const NavBarActiveList = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [check, setCheck] = useState(false)
    const handleClick = (i) => {
        setCheck(current => !current)
        setActiveIndex(i)

    }

    return (
        <>
            <ul>

                {initialState.map((t, i) => {
                        return (
                            <li key={t.id} className={activeIndex === i ? `${s.list} ${s.active}` : s.list}
                                onClick={() => handleClick(i)}
                            >
                                {/*<li key={t.id} className={check ? s.list : `${s.list} ${s.active}` }*/}
                                {/*    // onClick={handleClick}*/}
                                {/*>*/}

                                <Link to={t.link} style={{color: `${t.color}`}}>

                                    {t.id === 1 && (
                                        <span className={s.icon}>
                                                        {t.icon}
                                                </span>
                                    )}
                                    {t.id === 2 && (
                                        <span className={s.icon}>
                                                        {t.icon}
                                                </span>
                                    )}
                                    {t.id === 3 && (
                                        <span className={s.icon}>
                                                        {t.icon}
                                                </span>
                                    )}
                                    {t.id === 4 && (
                                        <span className={s.icon}>
                                                        {t.icon}
                                                </span>
                                    )}
                                    {t.id === 5 && (
                                        <span className={s.icon}>
                                                        {t.icon}
                                                </span>
                                    )}
                                    {t.id === 6 && (
                                        <span className={s.icon}>
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

export default NavBarActiveList;
