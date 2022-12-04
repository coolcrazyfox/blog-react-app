import React, {useState} from 'react';
import s from '../styles/NavBar.module.css'
import {SiApostrophe, SiHomeassistant, SiMicrodotblog} from "react-icons/si";
import {RiLoginCircleFill} from "react-icons/ri";
// import {SlLogin} from "react-icons/sl";
import {HiUserGroup} from "react-icons/hi";
import {MdSettingsSuggest} from "react-icons/md";
import {Link} from "react-router-dom";
import Fade from "react-reveal/Fade";


export const initialState = [
    {id: 1, link: '/', title: "Home", color: "#D73486FF", icon: <SiHomeassistant/>},
    {id: 2, link: '/blogger', title: "Blogs", color: "#cea602", icon: <SiMicrodotblog/>},
    {id: 3, link: '/posts', title: "Posts", color: "#864E4CFF", icon: <SiApostrophe/>},
    {id: 4, link: '/users', title: "Users", color: "#8BB92CFF", icon: <HiUserGroup/>},
    {id: 5, link: '/registration', title: "Log In", color: "#ec8434", icon: <RiLoginCircleFill/>},
    {id: 6, link: '/settings', title: "Settings", color: "#A61111FF", icon: <MdSettingsSuggest/>}
]

const NavBar = ({onClick}) => {
    const [isActive, setIsActive] = useState(false)
    const [check, setCheck] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)
    // const handleOnChange=(event)=>{
    //     onChange(event.title)
    // }
    const handleClick = (i) => {
        setCheck(current => !current)
        setActiveIndex(i)
        onClick(i)
        console.log('click',  setActiveIndex(i))

    }

    const handleOnClick = () => {
        setIsActive(current => !current)
        setIsActive(!isActive)

    }

    return (
        <>
            <Fade left>
                <div className={isActive ? s.main_active : s.main}>
                    <div className={isActive ? s.navigation_active : s.navigation}>
                        <div className={s.menuToggle} onClick={handleOnClick}></div>
                        <ul>
                            {initialState.map((t, i) => {
                                    return (
                                        <li key={t.id} className={activeIndex === i ? `${s.list}${s.active}` : s.list}
                                            onClick={() => handleClick(i)}
                                            // onChange={()=>handleOnChange(t.title)}
                                        >
                                            <Link
                                                className={s.a}
                                                to={t.link} style={{color: `${t.color}`}}>

                                                {t.id === i + 1 && (
                                                    <span className={s.icon}
                                                          style={activeIndex === i ? {background: '#0c6b6b'} : {background: `${t.color}`}}
                                                    >
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


                    </div>
                </div>
            </Fade>
        </>
    );
};

export default NavBar;
