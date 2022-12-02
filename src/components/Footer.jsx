import React from 'react';
import s from '../styles/Footer.module.css'
import Flip from 'react-reveal/Flip';

const Footer = () => {
    return (
        <div className={s.footer}>
                <div className={s.footer_container}>
                    <Flip>
                        <a href="btn" className={s.link}>
                        <span className={s.span}></span>
                        <span className={s.span}></span>
                        <span className={s.span}></span>
                        <span className={s.span}></span>
                        Show more
                    </a>
                    </Flip>
                </div>
        </div>
    );
};

export default Footer;
