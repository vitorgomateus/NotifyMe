import React, {Component} from 'react';
import { browserHistory } from 'react-router';
/*
 import {connect} from 'react-redux';*/
import Splash from '../components/Splash';

class Callback extends Component {

    /*componentWillMount(){
        var code= window.localStorage.getItem("userToken");
        console.log("userToken: ",code);
        if(code) {
            browserHistory.push('/home');
        }
    }*/

    render() {

        var code = document.location.search.substring(6);

        console.log("1CALLBACK_code: "+code);
        window.localStorage.setItem("codigo",code);

        // criar a chamada AJAX para obter o token, atenção aos parâmetros, novamente têm de ser iguais aos criados no laravel
        var http = new XMLHttpRequest();
        var url = "http://samuelbf94.ddns.net/oauth/token";
        var params = "grant_type=authorization_code";
            params += '&client_id=2';
            params += '&client_secret=q07U8sJorHXtnt0KvBbFEXqgxmA6HoqaXv46ssK3';//PQhIMghkcKIPbNAUT0YAlhNifNCCkGpu86l0Qrd1
            params += '&redirect_uri=http://localhost:3000/callback';//http://notifyme-react.ddns.net/#/main'; //http://localhost:3000/Callback.jsx';
            params += '&code='+code;

        http.open("POST", url, true);

        // Definir os headers
        http.setRequestHeader('Accept', 'application/json, application/x-www-form-urlencoded');
        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        // função que irá obter a resposta do servidor
        console.log("10.CALLBACK HTTP",http);
        var user;

        http.onreadystatechange = function() {
            if(http.readyState === 4 && http.status === 200) {

                console.log("2CALLBACK"+http.responseText);

                // obtem o objeto retornado e transforma-o num JSON válido.
                var response = JSON.parse(http.responseText);

                if(response.token_type === "Bearer")
                {
                    console.log("3CALLBACK: "+response.access_token);

                    // este é o token que devemos guardar para enviar em todas as chamas daqui para a frente
                    var token = "Bearer "+response.access_token;
                    window.localStorage.setItem("userToken",token);

                    // exemplo de uma chamada para obter o utilizador autenticado
                    var http2 = new XMLHttpRequest();
                    var url = "http://samuelbf94.ddns.net/api/v1/user";

                    http2.open("GET", url, true);

                    // novamente definir os headers, desta vez notar o header "Authorization" onde passamos o token
                    http2.setRequestHeader('Accept', 'application/json, application/x-www-form-urlencoded');
                    http2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    http2.setRequestHeader("Authorization", token);


                    http2.onreadystatechange = function() {
                        if(http2.readyState === 4 && http2.status === 200) {


                            // ver na consola a informação do utilizador autenticado!
                            user = http2.reponseText;
                            window.localStorage.setItem("userCode",user);
                            console.log("4CALLBACK: ", user);
                        }
                    };

                    http2.send();
                }

            }
        };
        http.send(params);

        return(
            <div className="callback splash">
                <Splash />
            </div>
        );

    }


}
export default Callback
/*
 Callback.propTypes = {
 items: PropTypes.array
 }

 const mapStateToProps = (state, ownProps) => {
 // console.info('container List mapStateToProps', state, ownProps);
 return state.lists;
 }

 export default connect(mapStateToProps)(Callback);*/
