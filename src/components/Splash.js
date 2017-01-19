/**
 * Created by VitorMaGo on 19/12/2016.
 */
import React, { Component } from 'react';
import Spinner from 'react-spinkit';
import {Link} from 'react-router';
import splashLogo from '../../public/img/logo.png'

import '../../public/css/splash.css'

class Splash extends Component {
    render(){

        return (

            <div className="splashBody" >
                <Link to="/info">
                    <img src={splashLogo} className="splashImg" alt="logo" />
                    <div className="spinnerCapsule">
                        <Spinner spinnerName="cube-grid" />
                    </div>
                </Link>
            </div>

        )
    }
}

export default Splash;