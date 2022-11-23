import React, {useState} from 'react';
import s from "../styles/Select.module.css";

const SelectPosts = () => {
    const arOptions = ['New posts first', 'Old posts first'];
    const [value, setValue] = useState('');
    const options = arOptions.map((text, index) => {
        return <option key={index}>{text}</option>;
    });
    return (
        <div className={s.select_box}>
            <select className={s.select} value={value} onChange={(e)=>setValue(e.target.value)}>
                {options}

            </select>
        </div>
    );
};

export default SelectPosts;
