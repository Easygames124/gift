import React from 'react';
import classes from './IconButton.module.css';
import 'material-icons';

const IconButton = ({children, theme, ...props}) => {
    return (
        <span
            {...props}
            className={classes.myBtn + " material-icons " + `${theme === "dark" ? classes.dark : ""}`}
        >
            {children}
        </span>
    );
};
export default IconButton;