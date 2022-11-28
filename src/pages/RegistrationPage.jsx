import React from 'react';
import s from '../styles/RegistrationPage.module.css'
import {SiHomeassistant} from "react-icons/si";

const RegistrationPage = () => {
    return (
        <div className={s.main_container}>


            <div className={s.sidebar}>
                <header>Menu</header>
                <ul>
                    <li>
                        <a href="#">
                            <i className={s.fas}>
                                <SiHomeassistant/>
                                Blogs
                            </i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className={s.fas}>
                                <SiHomeassistant/>
                                Posts
                            </i>
                        </a>
                    </li>
                </ul>
            </div>



        </div>
    );
};

export default RegistrationPage;
