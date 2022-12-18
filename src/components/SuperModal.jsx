import React from 'react';
import s from '../styles/SuperModal.module.css'



const SuperModal = ({children, visible, setVisible}) => {
    const rootClasses=[s.myModal]
    if(visible){
        rootClasses.push(s.active)
    }
    return (
        <div className={rootClasses.join(' ')}>
        {/*<div className={[s.myModal, s.active].join('')}>*/}
            <div className={s.myModalContent}>
                {children}

            </div>

        </div>
    );
};

export default SuperModal;
