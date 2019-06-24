import React from 'react';

import { Link } from 'react-router-dom';

import './shoes.css';

const Shoes = (props) => {
    const {
        title,
        image,
        subtitle,
        price,
        url
    } = props;

    return (
        <div className={'shoes'}>
            <Link to={url}>
                <div
                    className={'shoes__image'}
                    style={{ backgroundImage: `url(${image})` }}
                />
            </Link>
            <div className={'shoes__title'}>
                <Link to={url}>{title}</Link>
            </div>
            <div className={'shoes__category'}>
                {subtitle}
                ,&nbsp;
                <strong>{price}</strong>
            </div>
        </div>
    );
};


export default Shoes;
