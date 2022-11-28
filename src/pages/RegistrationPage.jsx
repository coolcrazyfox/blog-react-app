import React, {useState} from 'react';
import s from '../styles/RegistrationPage.module.css'
import {SiHomeassistant} from "react-icons/si";
import {FaBars} from "react-icons/fa";
import {ImCancelCircle} from "react-icons/im";

const RegistrationPage = () => {
    const [active, setActive]=useState(false)
    const handelOnClick=(active)=>{
        setActive(active)
    }
    return (
        <div className={s.main_container}>
            {/*<input type="checkbox" className={s.check}/>*/}
            {/*<label htmlFor={'check'} >*/}
            {/*    <i className={s.btn} onClick={()=>handelOnClick(!active)}>*/}
            {/*        <FaBars/>*/}
            {/*    </i>*/}
            {/*    <i className={s.cancel} onClick={()=>handelOnClick(!active)}>*/}
            {/*        <ImCancelCircle/>*/}
            {/*    </i>*/}
            {/*</label>*/}


            <div className={ s.sidebar }>
                <header>Menu-
                    <i className={s.cancel} onClick={()=>handelOnClick(active)}>
                    <ImCancelCircle/>
                </i>
                </header>

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
            <section></section>



        </div>
    );
};

export default RegistrationPage;
