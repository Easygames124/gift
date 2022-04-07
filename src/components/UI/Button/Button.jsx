import React from 'react';
import classes from './Button.module.css';

const Button = ({children, ...props}) => {
    return (
        <button
            {...props}
            className={`${classes.myBtn} ${props.className ? props.className : ""}`}
        >
            {children}
        </button>
    );
};

export default Button;