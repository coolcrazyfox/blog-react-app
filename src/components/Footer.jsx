import React from 'react';
import s from '../styles/Footer.module.css'
const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.footer_container}>
                <a href="btn" className={s.link}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Show more
                </a>
                {/*<button>Show more</button>*/}
            </div>

        </div>
    );
};

export default Footer;
