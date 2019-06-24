import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import Shoes from '../../components/Shoes';
import PageMeta from '../../components/PageMeta';
import HomeStub from './home.stub';
import { fetchHomepage as fetchPageData } from '../../ducks/homepage/actions';

import './home.css';

class Home extends React.Component {

    static asyncFetchData({ dispatch }) {
        dispatch(fetchPageData());
    }

    componentDidMount() {
        const { data, fetchHomepage } = this.props;

        if (!data.popular.length) {
            fetchHomepage();
        }
    }

    render() {
        const { isLoading, data } = this.props;

        if (isLoading) {
            return <HomeStub />;
        }

        return (
            <div className="page centering">
                <PageMeta
                    title="Home page"
                    description="Buy awesome snickers"
                />
                <div className="container clear">
                    <h2>Popular</h2>
                    {data.popular.map(d => (
                        <Shoes key={d.slug} {...d} />
                    ))}
                </div>

                <div className="container">
                    <h2>Newest</h2>
                    <div className="clear">
                        {data.newest.map(d => (
                            <Shoes key={d.slug} {...d} />
                        ))}
                    </div>
                    <div className="container__more">
                        <Link to="/catalog"><Button>See more</Button></Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
