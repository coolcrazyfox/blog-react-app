import React, {useState} from 'react';
import s from '../styles/Use'
const UsersPage = () => {
    const [active, setActive] = useState(0)
    const title = ['blogs', 'posts']
    const handleOnClick = (index) => {
        setActive(index)

    }
    return (
        <div className={s.main}>
            <ul>
                {title.map((t, i) => (
                    <li
                        className={active === i ? "active" : ''}
                        onClick={() => handleOnClick(i)}
                    >
                        {t}
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default UsersPage;
