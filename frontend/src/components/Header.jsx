import React, {useState} from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';

import Logo from './Logo';
import Nav from './Navigation';
import s from '../styles/components/Header.css';

const Header = (props) => {

    //props destructure
    const {headerImage} = props;

    //header style
    const headerStyle = {
        backgroundImage:headerImage ? `url(${headerImage})` : null,
    }

    return(
        <header id='page-header' className={s.header + ' bg-primary p-0 shadow-sm'} style={headerStyle}>
            <div className="header_inner pt-2 pl-5 pr-5">

                {/* Top Navigation Menu */}
                <div className="col-12 header__top-nav row">
                    <div className="logo-wrapper col-sm-8 col-md-3 col-lg-3 p-0">
                        <Logo/>
                    </div>
                    <div className="menu-wrapper col-sm-4 col-md-9 col-lg-9 text-right pt-3 p-0">
                        <Nav location='header'/>
                    </div>
                </div>

                {/* Custom Header Contents */}
                <div className={`mt-5 row`}>
                    {props.children}
                </div>
            </div>

            {/* SVG DRAWING */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="d-block">
                <path fill="#FAEED6" fillOpacity="1" d="M0,160L34.3,165.3C68.6,171,137,181,206,160C274.3,139,343,85,411,90.7C480,96,549,160,617,160C685.7,160,754,96,823,64C891.4,32,960,32,1029,48C1097.1,64,1166,96,1234,106.7C1302.9,117,1371,107,1406,101.3L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
            </svg>
        </header>
    )
}

export default withStyles(s)(Header)