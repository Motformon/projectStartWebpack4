import React from 'react';
import { withRouter } from 'react-router-dom';

import Button from '../../components/Button';
import Shoes from '../../components/Shoes';
import PageMeta from '../../components/PageMeta';
import ShoesStub from './shoes.stub';
import { fetchHomepage } from '../../ducks/homepage/actions';
import { fetchShoes as fetchPageData } from '../../ducks/shoes/actions';

import './shoes.css';

class ShoesPage extends React.Component {

    static asyncFetchData({ dispatch, match }) {
        dispatch(fetchPageData(match.params.slug));
        dispatch(fetchHomepage());
    }

    componentDidMount() {
        const { fetchShoes, match, data } = this.props;

        if (data.slug !== match.params.slug) {
            fetchShoes(match.params.slug);
        }
    }

    componentDidUpdate() {
        const { fetchShoes, match, data } = this.props;

        if (data.slug !== match.params.slug) {
            fetchShoes(match.params.slug);
        }
    }

    render() {
        const { data, popular, isLoading } = this.props;
        const {
            title,
            category,
            price,
            images,
            description
        } = data;

        if (isLoading || !data.title) {
            return (<ShoesStub />);
        }

        return (
            <div className={`page centering shoes-page`}>
                <PageMeta
                    title={title}
                    description={description}
                    image={images[0]}
                />

                <div className="container clear">
                    <div className={'shoes-page__category'}>{category}</div>
                    <h1>{title}</h1>
                    <strong>{price}</strong>
                        {images.map(url => (
                            <div key={url}>
                                <img alt="" className={'shoes-page__image'} src={url} />
                            </div>
                        ))}
                    <div className={'shoes-page__description'}>{description}</div>
                    <Button size="xl">Buy</Button>
                </div>
                {Boolean(popular.length) && (
                    <div className="container clear">
                        <h2>See also</h2>
                        {popular.map(d => (
                            <Shoes key={d.slug} {...d} />
                        ))}
                    </div>
                )}
            </div>
        );
    }
}

export default withRouter(ShoesPage);
