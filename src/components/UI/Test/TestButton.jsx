import React from 'react';

const TestButton = ({children, ...props}) => {
    return (
        <button {...props}>
            {children}

        </button>
    );
};

export default TestButton;
