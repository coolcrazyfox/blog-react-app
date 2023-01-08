import React from 'react';
import TestInput from "./TestInput";
import TestButton from "./TestButton";

const TestForm = () => {
    return (
        <form>
            <TestInput/>
            <TestInput/>
            <TestInput/>
            <TestInput/>
            <TestButton>Add</TestButton>

        </form>
    );
};

export default TestForm;
