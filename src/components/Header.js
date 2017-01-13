/**
 * Created by VitorMaGo on 15/12/2016.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';
import '../css/style.css';
import '../css/header.css';

class Header extends Component {


    render (){

        return(
            <nav role="navigation" className="navbar navbar-default">

                <div className="navbar-header">
                    <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"> </span>
                        <span className="icon-bar"> </span>
                        <span className="icon-bar"> </span>
                    </button>
                    <h1 className="headerLogo"><b>Notify Me!</b></h1>
                </div>

                <div id="navbarCollapse" className="collapse navbar-collapse navbar-right">
                    <ul className="nav navbar-nav navbar-left">
                        <li className="active"><Link to="/main">Home</Link></li>
                        <li><Link to="/defs">Definições</Link></li>

                        {/*Deviam sair daqui*/}
                        <li><Link to="/info">Login</Link></li>
                        <li><Link to="/prefs">Preferências</Link></li>
                    </ul>
                    <ul className="nav navbar-nav">
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header



