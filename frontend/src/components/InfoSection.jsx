import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from '../styles/components/InfoSection.css';

const InfoSection = (props) => {
    return (
        <div className={s.section_wrapper + ' row'}>
            <div className={s.title + ' col-12 mx-auto'}>
                <h4 className={s.info_title+" font-weight-bold text-dark"}>{props.title.toUpperCase() || 'Feature You Love'}</h4>
                {/* <div className="border border-primary col-lg-2 col-md-4 col-sm-6 mx-auto"></div> */}
            </div>
            <div className={s.body + ' col-12'}>
                <p className="lead">{props.body || 'Use Goalr Today'}</p>
            </div>
        </div>
    )
}
export default withStyles(s)(InfoSection)