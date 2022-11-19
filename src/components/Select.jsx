import React, {useState} from 'react';
import s from "../styles/Select.module.css";

const Select = () => {
    const arOptions = ['New blogs first', 'Old blogs first', 'From A to Z', 'From Z to A'];
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

export default Select;
