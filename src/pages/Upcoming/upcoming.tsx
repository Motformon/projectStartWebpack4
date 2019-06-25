import React from 'react';

import './upcoming.scss';


const Upcoming = () => {
	const numberTest:number = 10;
    return (
        <div className="page centering">
            <div className="container clear">
                <h2>{numberTest}Upcoming...</h2>
                <div className="upcoming__banner" />
            </div>
        </div>
    );
};

export default Upcoming;
