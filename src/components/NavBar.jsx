import React, {useState} from 'react';
import s from '../styles/NavBar.module.css'
const NavBar = () => {
    const [isActive, setIsActive]= useState(false)

    const handleClick=(e)=>{
        setIsActive(current=>!current)
    }
    return (
        <div className={isActive? s.navigation_active: s.navigation}>
            <div className={s.menuToggle} onClick={handleClick}></div>

        </div>
    );
};

export default NavBar;
