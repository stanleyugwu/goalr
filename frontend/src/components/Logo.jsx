import Logo from '../assets/images/logo.png';
import React from 'react';
import s from '../styles/components/Logo.css';

export default () => {
    return (
        <div className={s.logo}>
            <img src={Logo} alt="Goalrx Logo" className="img-responsive logo-img" width="100" height="50"/>
        </div>
    );
}