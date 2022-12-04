import React from 'react';
import s from '../styles/Footer.module.css'
import Flip from 'react-reveal/Flip';
import SupperButton from "./SupperButton";

const Footer = () => {
    return (
        <div className={s.footer}>
                <div className={s.footer_container}>
                    <Flip>
                        <SupperButton link={'/'}>
                            Show more
                        </SupperButton>
                    </Flip>
                </div>
        </div>
    );
};

export default Footer;
