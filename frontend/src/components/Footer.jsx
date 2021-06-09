import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import Nav from '../components/Navigation';
import s from '../styles/components/Footer.css';

import curve from '../assets/images/footerCurve.svg';

const Footer = (props) => {
    return (
        <footer className={'bg-primary p-0 row mx-auto text-center'}>
            <img src={curve} alt="svg curve" className="img-responsive w-100"/>
            <section className={'col-12'}>
                {/* Facebook */}
                <a class="btn btn-outline-cta btn-floating m-2" href="#!" role="button">
                    <i class="fab fa-facebook-f"></i>
                </a>

                {/* Instagram */}
                <a class="btn btn-outline-cta btn-floating m-2" href="#!" role="button">
                    <i class="fab fa-instagram"></i>
                </a>

                {/* Twitter */}
                <a class="btn btn-outline-cta btn-floating m-2" href="#!" role="button">
                    <i class="fab fa-twitter"></i>
                </a>

                {/* LinkedIn */}
                <a class="btn btn-outline-cta btn-floating m-2" href="#!" role="button">
                    <i class="fab fa-linkedin"></i>
                </a>
            </section>
            <div className={'col-12 mx-auto my-3'}>
                <Nav location="footer"/>
            </div>
            <div className={'col-12'}>
                <p className="text-secondary mb-0">&#169;Copyright - 2021</p>
                <p className="text-secondary mb-1">All rights reserved</p>
            </div>
                
        </footer>
    )
}

export default withStyles(s)(Footer)