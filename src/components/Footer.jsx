import React from 'react';
import s from '../styles/Footer.module.css'
import Flip from 'react-reveal/Flip';
import SuperButton from "./UI/SuperButton/SuperButton";

const Footer = ({onClick, theme}) => {
    return (
        <div className={theme === 'light'? s.footer: s.footer_dark}>
                <div className={s.footer_container}>

                    {/*<button onClick={onClick}>get</button>*/}
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
