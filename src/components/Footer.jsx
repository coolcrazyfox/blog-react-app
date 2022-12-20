import React from 'react';
import s from '../styles/Footer.module.css'
import Flip from 'react-reveal/Flip';
import SuperButton from "./UI/SuperButton/SuperButton";

const Footer = () => {
    return (
        <div className={s.footer}>
                <div className={s.footer_container}>
                    <Flip>
                        <SuperButton link={'/'}>
                            Show more
                        </SuperButton>
                    </Flip>
                </div>
        </div>
    );
};

export default Footer;
