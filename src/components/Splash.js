/**
 * Created by VitorMaGo on 19/12/2016.
 */
import React, { Component } from 'react';
import Spinner from 'react-spinkit';
import splashLogo from '../../public/img/logo.png'

import '../css/splash.css'

class Splash extends Component {
    render(){

        return (

            <div className="splashBody" >
                    <img src={splashLogo} className="splashImg" alt="logo" />
                    <div className="spinnerCapsule">
                        <Spinner spinnerName="cube-grid" />
                    </div>

            </div>

        )
    }
}

export default Splash;