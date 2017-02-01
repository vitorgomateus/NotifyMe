import React, {Component} from 'react';
import { browserHistory } from 'react-router';
/*
 import Spinner from 'react-spinkit';
 import '../components/Login';*/

var nome;

class Login extends Component {
    //console.info('component List', items);
    //by Vitor

    /*href="http://samuelbf94.ddns.net/oauth/authorize?
     client_id=2
     &redirect_uri=http://notifyme-react.ddns.net/callback.html
     &response_type=code
     &scope"*/

    //var canal = items.value;

    constructor(props){
        super(props);
        // this.goLogin = this.goLogin().bind(this);
    }

    goLogin(){
        window.localStorage.setItem("userName", nome);
        var code= window.localStorage.getItem("userToken");
        console.log("userToken: ",code);
        if(!code) {
            window.location.replace('http://samuelbf94.ddns.net/oauth/authorize?client_id=3&redirect_uri=http://localhost:3000/callback&response_type=code&scope');

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
            <div className="login-wrapper">
                {/*http://samuelbf94.ddns.net/oauth/authorize?
                 client_id=3&
                 redirect_uri=http://localhost:3000/callback&
                 response_type=code&
                 scope*/}
                <img className="login-img" src={logo} alt="logo Notify Me" />

                <h3 className="login-welcome"> Bem vindo à experiência</h3>
                <h2 className="login-welcome"> Notify Me </h2>
                <div className="btn btn-primary login-btn" onClick={() => this.goLogin()}>Login/Registo</div>
                <input type="text" placeholder="O seu lindo nome aqui!" onChange={ this.handleChange } />
                <div className="login-text">
                    <p>Já se sentiu frustrado com o catálogo TV, inúmeros canais e programas e de perder mais tempo a escolher o que ver do que a gozar a televisão?</p>
                    <br/>
                    <p>Tem saudades da experiência de televisão confortável de ligar a TV, fazer zapping eencontrar algo para ver em minutos?</p>
                    <br/>
                    <p>Não desespere! <br/>
                        Registe-se na nossa aplicação para ver TV como deve de ser! <br/>
                        Vai ver que a vida é muito simples na verdade.
                    </p>
                    <br/>
                </div>

                {/*<Spinner spinnerName="cube-grid"/>*/}
            </div>
        );
    }
}
/*
 return()
 <div className="corpo-registo">
 <h2>Efetuar o registo</h2>
 <form action="#" method="post">
 <div className="input-group col-xs-12">
 <input type="text" className="form-control" placeholder="Nome de utilizador"/>
 </div>

 <div className="input-group col-xs-12">
 <input type="text" className="form-control" placeholder="Data de nascimento"/>

 </div>
 <div className="input-group col-xs-12">
 <input type="text" className="form-control" placeholder="Email"/>
 </div>

 <div className="input-group col-xs-12">
 <input type="text" className="form-control" placeholder="Password"/>
 </div>

 <div className="input-group col-xs-12">
 <input type="text" className="form-control" placeholder="Nº de Conta"/>
 </div>


 <div>
 <Link to="/defs">
 <button type="submit" className="btn btn-primary col-xs-5" id="registo-buttons" >
 Registar
 </button>
 </Link>
 {/!*<div className="col-xs-2"></div>
 <button type="button" className="btn btn-default col-xs-5 facebook" id="registo-buttons">Registar Facebook</button>*!/}
 </div>
 </form>
 </div>
 */

/*
 List.propTypes = {
 items: React.PropTypes.array.isRequired
 };*/

export default Login;
