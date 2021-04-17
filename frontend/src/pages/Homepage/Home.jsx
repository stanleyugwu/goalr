import React, {Fragment} from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';

import s from './Home.css';
import Header from '../../components/Header';

const Home = (props) => {
    return (
        <Fragment>
            {/* Page Header Component */}
            <Header>
                <div className="row">
                    <div>
                        Registeration
                    </div>
                </div>
            </Header>
        </Fragment> 
    )
}

export default withStyles(s)(Home)