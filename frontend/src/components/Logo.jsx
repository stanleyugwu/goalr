import Logo from '../assets/images/logo.png';
import React from 'react';
// import '../styles/components/Logo.css';

export default () => {
    return (
        <div className="logo">
            <img src={Logo} alt="Goalrx Logo" className="img-responsive" width="100" height="50"/>
        </div>
    );
}