import React, {useState} from 'react';
import s from '../styles/RegistrationPage.module.css'
import {initialState} from "../components/NavBar";
import {Link} from "react-router-dom";

const RegistrationPage = () => {
    const tasks = initialState
    const [isActive, setIsActive] = useState(false)
    const handelClick = () => {
        // setActive(current => !current)
        setIsActive(!isActive)


    }
    return (
        <div className={s.main_container}>

            {/*<div className={isActive? s.navigation_box: ''}>*/}
            <div className={isActive ? s.navigationn_active : s.navigationn}>
                <div className={s.menu_toggle} onClick={() => setIsActive(!isActive)}>
                    <ul>
                        {tasks.map(t => {
                                return (
                                    <li key={t.id} className={s.lists}>
                                        <Link to={t.link}>
                                            <span className={s.icons}>{t.icon}</span>
                                            <span className={s.title}>{t.title}</span>
                                        </Link>

                                    </li>
                                )
                            }
                        )}
                    </ul>
                </div>
            </div>


            {/*</div>*/}
        </div>

    );
};

export default RegistrationPage;
