import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import loadable from '@loadable/component';

import './header.css';

const preloadPage = pageName => loadable(() => import(`../../pages/${pageName}`));

const menu = [
    { to: '/', exact: true, page: 'Home' },
    { to: '/catalog', exact: true, page: 'Catalog' },
    { to: '/upcoming', exact: true, page: 'Upcoming' }
];

const Header = () => (
    <div className={"header"}>
        <div className={'header__logo'} />
        <nav className={'header__nav'}>
            {menu.map(data => (
                <NavLink
                    key={data.to}
                    exact={data.exact}
                    activeClassName="header__nav-item_active"
                    to={data.to}
                    className={'header__nav-item'}
                    onMouseMove={() => preloadPage(data.page).preload()}
                >
                    {data.page}
                </NavLink>
            ))}
        </nav>
    </div>
);

export default withRouter(Header);
