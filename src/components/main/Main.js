import React from 'react';
import './main.css';
import Logo from '../logo/Logo';
import { Btn } from '../btn/Btn';

export const Main = () => {
    return (
        <div className="main">
            <div className="container">
                <Logo/>
                <div className="main__text">
                    Get how-to help and instructions or specific features in
                    <Btn text="HELP CENTER"/>
                    or
                    <Btn text="SUPPORT"/>
                </div>
            </div>
        </div>
    )
};
