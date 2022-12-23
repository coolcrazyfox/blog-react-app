import React, {useState} from 'react';
import s from "../../../styles/Select.module.css";

const SuperSelect = ({options,defaultValue, value, onChange}) => {
    // const arOptions = ['New blogs first', 'Old blogs first', 'From A to Z', 'From Z to A'];
    // const [value, setValue] = useState('');
    // const options = arOptions.map((text, index) => {
    //     return <option key={index}>{text}</option>;
    // });
    // const optionsValue = options.map((text, index) => {
    //     return <option key={index}>{text.name}</option>;
    // });
    return (
        <div className={s.select_box}>
            <select className={s.select}  value={value} onChange={(e)=>onChange(e.target.value)} >

                {/*<option disabled value="">{defaultValue}</option>*/}
                {options.map((option,index)=>
                    <option key={index} value={option.value}>
                        {option.name}
                    </option>
                )}


            </select>
            {/*<select className={s.select} value={value} onChange={(e)=>setValue(e.target.value)}>*/}
            {/*    {options}*/}

            {/*</select>*/}
        </div>
    );
};

export default SuperSelect;
