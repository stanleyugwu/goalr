import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from '../styles/components/ContentBox.css';
import styleInliner from '../utils/styles_inliner';

const css = (styles) => styleInliner(s,styles);

const ContentBox = (props) => {

    //props destructure
    const {title,imageBlob,children, imagePosition = 'right', imageMaxWidth:maxWidth = 500, imageRotation = 0, contentWrapperStyle = null} = props;
    // const maxWidth = props.imageMaxWidth || 500;

    const contentStyle = {
        background:`url(${imageBlob})`,
        backgroundSize:'contain',
        backgroundPosition:imagePosition || 'right',
        backgroundRepeat:'no-repeat'
    }

    return (
        <div
            className={css`contentWrapper mx-auto text-center row mt-5`}
            style={contentWrapperStyle}
        >
            <div className="col-12">
                <h4 className={"text-primary"}>
                    {title && title.toUpperCase() || 'Feature You Love'}
                </h4>
                <div className={css`underline mx-auto w-20 bg-dark`}></div>
            </div>

            <div className="col-lg-10 col-md-10 col-sm-12 mx-auto row">
                <div className={`col-lg-${imageBlob ? '6' : '12'} col-sm-12 text-left d-flex flex-column p-0 align-items-center justify-content-center order-${imagePosition == 'left' ? '12' : '1'}`}>
                    {children}
                </div>

                {
                    imageBlob && (
                        <div className={`col-lg-6 col-sm-12 order-${imagePosition == 'left' ? '1' : '12'}`}>
                            <img
                                src={imageBlob}
                                alt={title}
                                className={css`imageStyle img-responsive`}
                                style={{maxWidth,transform:`rotate(${imageRotation}deg)`}}
                            />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default withStyles(s)(ContentBox)