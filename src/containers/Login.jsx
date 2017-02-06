import React, {Component} from 'react';
import { browserHistory } from 'react-router';
/*
 import Spinner from 'react-spinkit';
 import '../components/Login';*/

var nome;

class Login extends Component {

    constructor(props){
        super(props);
        // this.goLogin = this.goLogin().bind(this);
    }

    goLogin(user){
        if(nome){
            window.localStorage.setItem("userName", nome);
        }
        var token = window.localStorage.getItem("userToken");
        console.log("userToken: ", token);
        if(!token && user) {
            window.location.replace('http://samuelbf94.ddns.net/oauth/authorize?client_id=2&redirect_uri=http://localhost:3000/callback&response_type=code&scope');

        }else{
            browserHistory.push('/home');
        }
    }

    handleChange(e) {
        //console.log(e.target.value);
        nome = e.target.value;
    }



    render() {
        //console.log("Login Container");

        var logo = require('../../public/img/logo.png');
        return (
            <div className="fullscreen-wrapper">

                <div className="col-xs-12">
                    <img className="login-img" src={logo} alt="logo Notify Me" />
                </div>

                <div className="col-xs-12">
                    <div className="btn btn-primary login-btn" onClick={() => this.goLogin(true)}>Login/Registo</div>
                    <div className="btn btn-default login-btn" onClick={() => this.goLogin(false)}>Guest</div>

                    <input type="text" className="login-btn" placeholder="Diga-nos como se chama." onChange={ this.handleChange } />
                </div>

            </div>
        );
    }
}
export default Login;
