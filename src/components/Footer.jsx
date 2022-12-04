import React from 'react';
import s from '../styles/Footer.module.css'
import Flip from 'react-reveal/Flip';
import SupperButton from "./SupperButton";

const Footer = () => {
    return (
        <div className={s.footer}>
                <div className={s.footer_container}>
                    <Flip>
                        {/*<a href="btn" className={s.link}>*/}
                        {/*<span className={s.span}></span>*/}
                        {/*<span className={s.span}></span>*/}
                        {/*<span className={s.span}></span>*/}
                        {/*<span className={s.span}></span>*/}
                        <SupperButton link={'/'}> Show more </SupperButton>
                    {/*</a>*/}
                    </Flip>
                </div>
        </div>
    );
};

export default Footer;
