import React from 'react';
import TestInput from "./TestInput";
import TestButton from "./TestButton";

const TestForm = ({onClick}) => {
    return (
        <form>
            <TestInput type={'text'} placeholder={'image'}/>
            <TestInput type={'text'} placeholder={'title'}/>
            <TestInput type={'text'} placeholder={'text'}/>
            <TestInput type={'text'} placeholder={'date'}/>
            <TestButton onClick={onClick}>Add</TestButton>

        </form>
    );
};

export default TestForm;
