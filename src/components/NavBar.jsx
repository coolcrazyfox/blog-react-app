import React, {useState} from 'react';
import s from '../styles/NavBar.module.css'
import {SiHomeassistant, SiMicrodotblog} from "react-icons/si";
import {GiPostStamp} from "react-icons/gi";
import {SlLogin} from "react-icons/sl";
import {HiUserGroup} from "react-icons/hi";
import {MdSettingsSuggest} from "react-icons/md";
import {Link} from "react-router-dom";


const initialState = [
    {id: 1, link: '/', title: "Home", color: "red", act: false, icon: SiHomeassistant},
    {id: 2, link: '/blogs', title: "Blogs", color: "green", act: false, icon: SiMicrodotblog},
    {id: 3, link: '/posts', title: "Posts", color: "blue", act: false, icon: GiPostStamp},
    {id: 4, link: '/registration', title: "Log In", color: "orange", act: false, icon: SlLogin},
    {id: 5, link: '/users', title: "Users", color: "yellowgreen", act: false, icon: HiUserGroup},
    {id: 6, link: '/settings', title: "Settings", color: "gray", act: false, icon: MdSettingsSuggest}
]
console.log('style',s)
const NavBar = () => {
    const [tasks, setTasks] = useState(initialState)
    const [isActive, setIsActive] = useState(false)
    const [check, setCheck] = useState(false)
    const handleOnClick = () => {
        setIsActive(current => !current)

    }
    const handleClick = () => {
        setCheck(current => !current)

    }
    return (
        <div className={isActive? s.main_active: s.main}>
            <div className={isActive ? s.navigation_active : s.navigation}>
                <div className={s.menuToggle} onClick={handleOnClick}></div>
                {isActive ? (
                        <ul>
                            {tasks.map((t) => {
                                    return (
                                        <li key={t.id} className={ s.list }
                                            onClick={handleClick}
                                        >
                                            {/*<li key={t.id} className={check ? s.list : `${s.list} ${s.active}` }*/}
                                            {/*    // onClick={handleClick}*/}
                                            {/*>*/}

                                            <Link  className={s.a} to={t.link} style={{color: `${t.color}`}}>

                                                {t.id === 1 && (
                                                    <span className={s.icon} style={{background: `${t.color}`}}   >
                                                    <SiHomeassistant/>
                                                </span>
                                                )}
                                                {t.id === 2 && (
                                                    <span className={s.icon} style={{background: `${t.color}`}} >
                                                    <SiMicrodotblog/>
                                                </span>
                                                )}
                                                {t.id === 3 && (
                                                    <span className={s.icon} style={{background: `${t.color}`}} >
                                                    <GiPostStamp/>
                                                </span>
                                                )}
                                                {t.id === 4 && (
                                                    <span className={s.icon} style={{background: `${t.color}`}} >
                                                    <SlLogin/>
                                                </span>
                                                )}
                                                {t.id === 5 && (
                                                    <span className={s.icon} style={{background: `${t.color}`}} >
                                                    <HiUserGroup/>
                                                </span>
                                                )}
                                                {t.id === 6 && (
                                                    <span className={s.icon} style={{background: `${t.color}`}} >
                                                    <MdSettingsSuggest/>
                                                </span>
                                                )}


                                                <span className={s.text}>{t.title}</span>
                                            </Link>
                                        </li>
                                    )
                                }
                            )
                            }


                        </ul>) :
                    (<ul>
                        <ul>
                            {tasks.map((t) => {
                                    return (
                                        <li key={t.id} className={ s.list }
                                            onClick={handleClick}
                                        >
                                            {/*<li key={t.id} className={check ? s.list : `${s.list} ${s.active}` }*/}
                                            {/*    // onClick={handleClick}*/}
                                            {/*>*/}

                                            <Link to={t.link} style={{color: `${t.color}`}}>

                                                {t.id === 1 && (
                                                    <span className={s.icon}>
                                                    <SiHomeassistant/>
                                                </span>
                                                )}
                                                {t.id === 2 && (
                                                    <span className={s.icon}>
                                                    <SiMicrodotblog/>
                                                </span>
                                                )}
                                                {t.id === 3 && (
                                                    <span className={s.icon}>
                                                    <GiPostStamp/>
                                                </span>
                                                )}
                                                {t.id === 4 && (
                                                    <span className={s.icon}>
                                                    <SlLogin/>
                                                </span>
                                                )}
                                                {t.id === 5 && (
                                                    <span className={s.icon}>
                                                    <HiUserGroup/>
                                                </span>
                                                )}
                                                {t.id === 6 && (
                                                    <span className={s.icon}>
                                                    <MdSettingsSuggest/>
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

                    </ul>)}

            </div>
        </div>

    );
};

export default NavBar;
