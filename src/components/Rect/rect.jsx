import React from 'react';

import './rect.css';


const Rect = ({ width, height, type, className }) => {
    const classes = className ? `rect__${ type } ${className}` : `rect__${ type }`;

    return (
        <div style={{ width, height }} className={classes} />
    );
};
export default Rect;
