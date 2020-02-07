import React from 'react';
import './btnGradient.css';

function BtnGradient({text, isArrow = true, func}) {
    return (
        <div className="btn-gradient" onClick={func}>
            <p className="btn-gradient__text">{text}</p>
            {
                isArrow ?
                <img
                    className="btn-gradient__arrow"
                    src={require('../../img/right-arrow.png')}
                    alt="log in"
                />
                : ''
            }
        </div>
    );
}

export default BtnGradient;
