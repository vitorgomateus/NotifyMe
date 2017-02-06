/**
 * Created by VitorMaGo on 15/12/2016.
 */
import React from 'react';
import {Component} from 'react';
import {browserHistory} from 'react-router';
/*
import {Router, Redirect, BrowserHistory} from 'react-router';*/

/*react-bootstrap*/
/*
import Nav from 'react-bootstrap';
import { Navbar } from 'react-bootstrap/lib/Navbar';
import { NavItem } from 'react-bootstrap/lib/NavItem';
import { NavDropdown } from 'react-bootstrap/lib/NavDropdown';
import { MenuItem } from 'react-bootstrap/lib/MenuItem';*/

import { Link } from 'react-router';
import Back from '../../public/img/left_arrow.png';/*
 import '../../public/css/style.css';*/
import '../css/header.css';


class Header extends Component {

    constructor(props){
        super(props);
        this.Logout = this.Logout.bind(this);
    }

    /*<nav role="navigation" className="navbar navbar-default">

     <div className="navbar-header">
     <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle">
     <span className="sr-only">Toggle navigation</span>
     <span className="icon-bar"> </span>
     <span className="icon-bar"> </span>
     <span className="icon-bar"> </span>
     </button>
     <Link to="/main"><img className="backarrow" alt="Go back" src={Back}/></Link>
     <h1 className="headerLogo"><b>Notify Me!</b></h1>
     </div>

     <div id="navbarCollapse" className="collapse navbar-collapse navbar-right">
     <ul className="nav navbar-nav navbar-left">
     <li className="active"><Link to="/main">Home</Link></li>
     <li><Link to="/defs">Definições</Link></li>

     {/!*Deviam sair daqui*!/}
     <li><Link to="/info">Login</Link></li>
     <li><Link to="/prefs">Preferências</Link></li>
     </ul>
     <ul className="nav navbar-nav">
     </ul>
     </div>
     </nav>

     <Navbar inverse collapseOnSelect>
     <Navbar.Header>
     <Navbar.Brand>
     <a href="#">React-Bootstrap</a>
     </Navbar.Brand>
     <Navbar.Toggle />
     </Navbar.Header>
     <Navbar.Collapse>
     <Nav>
     <NavItem eventKey={1} href="#">Link</NavItem>
     <NavItem eventKey={2} href="#">Link</NavItem>
     <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
     <MenuItem eventKey={3.1}>Action</MenuItem>
     <MenuItem eventKey={3.2}>Another action</MenuItem>
     <MenuItem eventKey={3.3}>Something else here</MenuItem>
     <MenuItem divider />
     <MenuItem eventKey={3.3}>Separated link</MenuItem>
     </NavDropdown>
     </Nav>
     <Nav pullRight>
     <NavItem eventKey={1} href="#">Link Right</NavItem>
     <NavItem eventKey={2} href="#">Link Right</NavItem>
     </Nav>
     </Navbar.Collapse>
     </Navbar>*/

    Logout(){
        window.localStorage.removeItem("userToken");
        window.localStorage.removeItem("userName");
        browserHistory.push('/login');
    }


    render (){

        return(
        <nav className="navbar navbar-inverse altura">
            <div className="container-fluid">
                <div className="navbar-header floater">
                    <a className="navbar-brand" href="/home"><b id="title">Notify Me!</b></a>
                    <button type="button" className="navbar-toggle botao" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse cima" id="myNavbar">
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to = "/home" id="links">Home</Link></li>
                        <li><Link to = "/prefs" id="links">Prefs</Link></li>
                        <li onClick={() => this.Logout()}><a id="links" className="glyphicon glyphicon-log-out" href="#">Logout</a></li>
                    </ul>
                </div>
            </div>
        </nav>

        );
    }
}
/*
<nav role="navigation" className="navbar navbar-inverse">

    <div className="navbar-header">
        <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"> </span>
            <span className="icon-bar"> </span>
            <span className="icon-bar"> </span>
        </button>
        <Link to="/home">
            <img className="backarrow" alt="Go back" src={Back}/>
        </Link>
        <h1 className="headerLogo"><b>Notify Me!</b></h1>
    </div>

    <div id="navbarCollapse" className="collapse navbar-collapse navbar-right">
        <ul className="nav navbar-nav navbar-left">
            <li><Link to="/home">Home</Link></li>
            {/!*<li><Link to="/defs">Definições</Link></li>*!/}

            {/!*Deviam sair daqui*!/}
            {/!*<li><Link to="/info">Login</Link></li>*!/}
            <li><Link to="/prefs">Preferências</Link></li>
            <li onClick={() => this.Logout()}><a href="#"><span className="glyphicon glyphicon-log-out"></span> Logout</a></li>
        </ul>
        <ul className="nav navbar-nav">
        </ul>
    </div>
 </nav>*/

    export default Header



