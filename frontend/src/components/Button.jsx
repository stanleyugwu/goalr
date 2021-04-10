import React from 'react';

export default (props) => {
    return (
        <button className="btn btn-primary text-cta mt-4">
            {props.text || 'Click'}
        </button>
    )
}