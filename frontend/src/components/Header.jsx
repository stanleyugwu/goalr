import React from 'react';
import Logo from './Logo';
import Nav from './Navigation';
import style from '../styles/components/Header.css';
import withStyles from 'isomorphic-style-loader/withStyles';

const Header = (props) => {
    return(
        <header id='page-header' className={style.header}>
            <div className="col-12 header__top-nav row">
                <div className="logo-wrapper col-sm-8 col-md-3 col-lg-3">
                    <Logo/>
                </div>
                <div className="menu-wrapper col-sm-4 col-md-9 col-lg-9 text-right pt-3">
                    <Nav/>
                </div>
            </div>
            {props.children}
        </header>
    )
}

export default withStyles(style)(Header)