import React, {Fragment} from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './Home.css';

import smartImage from '../../assets/images/features/ft1.png';
import controlImage from '../../assets/images/features/ft2.png';
import privacyImage from '../../assets/images/features/ft3.png';
import visualizeImage from '../../assets/images/features/ft4.png';
import securityImage from '../../assets/images/features/ft5.png';
import tailoredContentImage from '../../assets/images/features/ft6.png';

import Header from '../../components/Header';
import ContentBox from '../../components/ContentBox';
import Footer from '../../components/Footer';
import styleInliner from '../../utils/styles_inliner';//inline styles helper that extracts css-module styles from string

//exposer for calling styleInliner without passing styleObject
const css = (styles) => {
    return styleInliner(s,styles)
}

const Home = (props) => {
    return (
        <Fragment>
            <Header>
                <div className={css`pitch-text col-lg-6 col-md-8 mt-2 col-sm-12 col-xs-12`}>
                    <h2 className={css`first-heading text-light`}>
                        Set and Achieve goals the right way,
                    </h2>
                    <h2 className={css`second-heading text-cta text-decoration-underline`}>
                        Use Goalr.
                    </h2>
                </div>
                <div className={css`get-started col-lg-8 col-md-10 col-sm-12 col-xm-12`}>
                    <div className={css`textbox-wrapper pl-3 col-9`}>
                        <div className={css`textbox p-0 row`}>
                            <input type="email" name="get-started-email" required placeholder="Enter Your Email Address to get started" className="form-control col-9 p-3" id={css`tbox-email`} />
                            <input type="button" value="Get Started" name="submit-btn" className={`form-control btn btn-cta col-3 text-primary rounded-right-3`} id={css`get-started-submit-btn`}/>
                        </div>
                    </div>
                </div>
            </Header>{/* Page Header Component */}

            <main className="px-1">
               <ContentBox title="set smart goals" imageBlob={smartImage} imagePosition='right'>
                   <p className="lead">
                       Set goals like an achiever. Goalr provides you with tools that helps you set Specific,
                       Measurable, Attainable, Relevant, and Time-based goals.
                   </p>
               </ContentBox>

               <ContentBox
                title="take control" 
                imageBlob={controlImage} 
                imagePosition='left' 
                imageMaxWidth={300} 
                imageRotation={-30}
                contentWrapperStyle={{marginBottom:'7%'}}
                >
                   <p className="lead">
                      You are in full control of how your goals are tracked and managed.
                      You control how goalr serves you, No lock-in.
                   </p>
               </ContentBox>

               <ContentBox
                title="you have your privacy"
                imageBlob={privacyImage}
                imagePosition='right'
                imageMaxWidth={400}
                >
                   <p className="lead">
                      Goalr was built with privacy in mind. Be rest assured that your personal information, goals,
                      and preferences are private to you, unless you choose to publicize them.
                   </p>
               </ContentBox>

               <ContentBox title="visualize your goals" imageBlob={visualizeImage} imagePosition='left'>
                   <p className="lead">
                      You have the visual model of your goals data. So you track your goals visually,
                      view the goal steps, you have an overview of your overall progress.
                   </p>
               </ContentBox>

               <ContentBox title="Ultimate data security" imageBlob={securityImage} imagePosition='right' imageMaxWidth={380}>
                   <p className="lead">
                      While nothing can be 100% secured, we are not guaranteeing you your data cant be hacked.
                      But be rest assured that we employ top-notch security measures to make sure your data is secured.
                   </p>
               </ContentBox>

               <ContentBox title="it's easy to achieve">
                   <div className={css`stepper_wrapper w-100 row mt-4`}>
                       {/* First step */}
                        <div className={css`step col-4 mt-3`}>
                            <div className="col-12">
                                <div className={
                                    css`circle bg-primary text-white position-relative text-center mx-auto my-auto d-flex align-items-center justify-content-center`
                                }>
                                    <h5 className="m-0">1</h5>
                                </div>
                            </div>
                            <div className="col-12 text-center mt-2">
                                <h6 className={css`title`}>SET AN ACCOUNT</h6>
                                <div>
                                    <p class="text-justify">Create an account with minimal information or sign-up quickly with your favorite social media platforms.</p>
                                </div>
                            </div>
                        </div>

                        {/* Second step */}
                        <div className={css`step col-4 mt-3`}>
                            <div className="col-12">
                                <div className={
                                    css`circle bg-primary text-white position-relative text-center mx-auto my-auto d-flex align-items-center justify-content-center`
                                }>
                                    <h5 className="m-0">2</h5>
                                </div>
                            </div>
                            <div className="col-12 text-center mt-2">
                                <h6 className={css`title`}>SET OR CHOOSE A GOAL</h6>
                                <div>
                                    <p class="text-justify">
                                        Create a new individual or routine goal and customise it to specific taste, or
                                        choose a goal from a curated list of community created sample goals, tailored to you.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Third step */}
                        <div className={css`step col-4 mt-3`}>
                            <div className="col-12">
                                <div className={
                                    css`circle bg-primary text-white position-relative text-center mx-auto my-auto d-flex align-items-center justify-content-center`
                                }>
                                    <h5 className="m-0">3</h5>
                                </div>
                            </div>
                            <div className="col-12 text-center mt-2">
                                <h6 className={css`title`}>START ACHIEVING OR SAVE</h6>
                                <div>
                                    <p class="text-justify">
                                        Start working towards the goal, checking each step of the goal process as you go.
                                        You can also save the goal for later, if you don't want to start achieving it immediately.
                                    </p>
                                </div>
                                <button className="btn btn-block text-cta bg-primary rounded-pill px-4 p-2 d-sm-none d-block">Get Started Now</button>
                            </div>
                        </div>
                        
                   </div>
               </ContentBox>

               <ContentBox title="we tailor what you see" imageBlob={tailoredContentImage} imagePosition='left' imageMaxWidth={450}>
                   <p className="lead">
                      We ensure that every on-site public content you consume are tailored to you based on your
                      interests and preferences. You will only see what you are interested in.
                   </p>
               </ContentBox>

               <ContentBox title="try it out">
                   <p className="lead text-center mt-4">
                        While nothing can be 100% secured, we are not guaranteeing you your data cant be hacked.
                        But be rest assured that we employ top-notch security measures to make sure your data is secured.
                    </p>
                   <button className="btn btn-primary rounded-pill px-4 p-2 text-cta">Start setting goals</button>
               </ContentBox>
            </main>

            
            <Footer/>{/* Page Footer */}
        </Fragment> 
    )
}

export default withStyles(s)(Home)