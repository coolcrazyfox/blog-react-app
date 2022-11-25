import React, {useState} from 'react';
import s from '../styles/NavBar.module.css'
import {SiApostrophe, SiHomeassistant, SiMicrodotblog} from "react-icons/si";
import {RiLoginCircleFill} from "react-icons/ri";
// import {SlLogin} from "react-icons/sl";
import {HiUserGroup} from "react-icons/hi";
import {MdSettingsSuggest} from "react-icons/md";
import {Link} from "react-router-dom";
import NavBarList from "./NavBarList";
import NavBarActiveList from "./NavBarActiveList";


export const initialState = [
    {id: 1, link: '/', title: "Home", color: "#D73486FF", icon: <SiHomeassistant/>},
    {id: 2, link: '/blogger', title: "Blogs", color: "#cea602",  icon: <SiMicrodotblog/>},
    {id: 3, link: '/posts', title: "Posts", color: "#864E4CFF", icon: <SiApostrophe/>},
    {id: 4, link: '/registration', title: "Log In", color: "#ec8434",  icon: <RiLoginCircleFill/>},
    {id: 5, link: '/users', title: "Users", color: "#8BB92CFF",  icon: <HiUserGroup/>},
    {id: 6, link: '/settings', title: "Settings", color: "#A61111FF", icon: <MdSettingsSuggest/>}
]

const NavBar = () => {
    // const [tasks, setTasks] = useState(initialState)
    const [isActive, setIsActive] = useState(false)
    const [check, setCheck] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)
    const handleClick = (i) => {
        setCheck(current => !current)
        setActiveIndex(i)

    }

    const handleOnClick = () => {
        setIsActive(current => !current)

    }

    return (
        <div className={isActive ? s.main_active : s.main}>
            <div className={isActive ? s.navigation_active : s.navigation}>
                <div className={s.menuToggle} onClick={handleOnClick}></div>
                {isActive ?
                    (<NavBarList /> ) :
                    (<NavBarActiveList />)
                }

            </div>
        </div>

    );
};

export default NavBar;
