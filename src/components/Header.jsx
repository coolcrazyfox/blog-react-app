import React from 'react';
import s from '../styles/Header.module.css'
const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.title}>
                <h4>Blogs Platform</h4>
            </div>
        </div>
    );
};

export default Header;
