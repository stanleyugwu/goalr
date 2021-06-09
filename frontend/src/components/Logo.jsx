import logoImage from '../assets/images/logo.png';
import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';

import s from '../styles/components/Logo.css';

const Logo = () => {
    return (
        <div className={s.logo}>
            <img src={logoImage} alt="Goalr Logo" className={s.logo_image+" img-responsive"}/>
        </div>
    );
}

export default withStyles(s)(Logo)