import React from 'react';

import './button.css';


const Button = (props) => {
    const { size, type, children } = props;

    return (
        <button type={type} className={'button'}>
            {children}
        </button>
    );
};


export default Button;
