import React, {useState} from 'react';
import s from '../styles/RegistrationPage.module.css'
import {SiHomeassistant} from "react-icons/si";
import {FaBars} from "react-icons/fa";
import {ImCancelCircle} from "react-icons/im";

const RegistrationPage = () => {
    const [isActive, setIsActive]=useState(false)
    const handelClick=()=>{
        // setActive(current => !current)
        setIsActive(!isActive)


    }
    return (
        <div className={s.main_container}>

            {/*<div className={isActive? s.navigation_box: ''}>*/}
                <div className={isActive? s.navigationn_active: s.navigationn}>
                    <div className={s.menu_toggle} onClick={()=>setIsActive(!isActive)}></div>
                </div>





            {/*</div>*/}
        </div>

    );
};

export default RegistrationPage;
