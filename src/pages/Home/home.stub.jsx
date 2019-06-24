import React from 'react';

import Rect from '../../components/Rect';
import ShoesStub from '../Shoes/shoes.stub';

const HomeStub = () => {

    return (
        <div className="page centering">
            <div className="container clear">
                <h2><Rect type="black" height="24px" width="190px" /></h2>

                <div className="home-stub">
                    {Array(3).fill().map((_, idx) => <ShoesStub key={idx} />)}
                </div>
            </div>
            <div className="container clear">
                <h2><Rect type="black" height="24px" width="190px" /></h2>

                <div className="home-stub">
                    {Array(6).fill().map((_, idx) => <ShoesStub key={idx} />)}
                </div>
            </div>
        </div>
    );
};

export default HomeStub;
