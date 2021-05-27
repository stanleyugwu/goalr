import React, {Fragment} from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';

import s from './Home.css';
import Header from '../../components/Header';

function css(i){
    let a = i[0].split(' ');
    let st = s || style || styles
    let [first,...rest] = a
    return st[first] ? st[first] +' '+rest.join(' ') : a.join(' ')
}

const Home = (props) => {
    return (
        <Fragment>
            {/* Page Header Component */}
            <Header>
                <div className={css`pitch-text col-6 mt-2`}>
                    <h2 className={css`first-heading text-light`}>
                        Set and Achieve goals the right way,
                    </h2>
                    <h2 className={css`second-heading text-cta text-decoration-underline`}>
                        Use Goalr.
                    </h2>
                </div>
                <div className={css`get-started col-8`}>
                    <div className={css`textbox-wrapper pl-3 col-9`}>
                        <div className={css`textbox p-0 row`}>
                            <input type="email" name="get-started-email" required placeholder="Enter Your Email Address to get started" className="form-control col-9 p-3 font-weight-bold" id={css`tbox-email`} />
                            <input type="button" value="Get Started" name="submit-btn" className={`form-control btn btn-cta col-3 font-weight-bold text-primary`} id={css`get-started-submit-btn`}/>
                        </div>
                    </div>
                </div>
            </Header>
        </Fragment> 
    )
}

export default withStyles(s)(Home)