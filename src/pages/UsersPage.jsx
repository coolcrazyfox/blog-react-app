import React, {useState} from 'react';
import s from '../styles/UsersPage.module.css'
import SupperButton from "../components/SupperButton";
const UsersPage = () => {
    const [active, setActive] = useState(0)
    const title = ['blogs', 'posts',' details']
    const handleOnClick = (index) => {
        setActive(index)

    }
    return (
        <div className={s.mainn}>
            <ul>
                {title.map((t, i) => (
                    <li
                        className={active === i ? `${s.active}` : ''}
                        onClick={() => handleOnClick(i)}
                    >
                        <SupperButton label={t}/>
                        {/*{t}*/}
                    </li>
                ))}
            </ul>
            {/*/!*<div className={s.btn_box}>*!/*/}
            {/*/!*    <SupperButton/>*!/*/}
            {/*/!*</div>*!/*/}

        </div>
    );
};

export default UsersPage;
