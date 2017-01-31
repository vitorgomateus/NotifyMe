import React, {Component} from 'react';
import Spinner from 'react-spinkit';
import '../components/Login';

class Login extends Component {
    //console.info('component List', items);
    //by Vitor

    /*href="http://samuelbf94.ddns.net/oauth/authorize?
     client_id=2
     &redirect_uri=http://notifyme-react.ddns.net/callback.html
     &response_type=code
     &scope"*/

    //var canal = items.value;


    render() {
        console.log("Login Container");
        return (
            <Spinner spinnerName="cube-grid"/>
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
