import React from 'react';

const classes = require('./upcoming.css');


const Upcoming = () => {
	const numberTest:number = 10;
    return (
        <div className={classes.Upcoming}>
            <div className="container clear">
                <h2>{numberTest}Upcoming...</h2>
                <div className={classes.banner} />
            </div>
        </div>
    );
};

export default Upcoming;
