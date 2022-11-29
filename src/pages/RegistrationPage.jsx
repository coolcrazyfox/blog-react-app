import React, {useState} from 'react';
import s from '../styles/RegistrationPage.module.css'
import {SiHomeassistant} from "react-icons/si";
import {FaBars} from "react-icons/fa";
import {ImCancelCircle} from "react-icons/im";

const RegistrationPage = () => {
    const [active, setActive]=useState(false)
    const handelClick=(active)=>{
        // setActive(current => !current)
        setActive(!active)


    }
    return (
        <div className={s.main_container}>
            <div className={active? `${s.navigationn}${s.active}`: s.navigationn}>
                <div className={s.menu_toggle} onClick={()=>setActive(!active)}></div>
            </div>





        </div>
    );
};

export default RegistrationPage;
