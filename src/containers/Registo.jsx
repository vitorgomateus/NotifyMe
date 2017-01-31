import React, {Component} from 'react';
import { Link } from 'react-router';

import {postContact} from '../actions';

/*import {connect} from 'react-redux';                  --- --- --- Axo que não é preciso -V*/


/*import {fetchContacts} from '../actions';             --- --- --- Axo que não é preciso -V*/

/* Registaro utlizador e enviar para as opções*/

class Registo extends Component {

    constructor(props) {
        super(props);
        this._submit = this._submit.bind(this);
        console.log("RegistoConstructor");
    }

    componentDidMount() {
        //const {dispatch} = this.props;  //
        /*dispatch(fetchContacts());                        --- --- --- Axo que não é preciso -V*/
        console.log("Reg.CDM");
    }

    render() {
    console.log("what....");
        //console.info('container App', this);
        return (
            <div className="corpo-registo">
                <h2>Efetuar o registo</h2>
                <form action="#" method="post">
                    <input type="text" className="form-control" placeholder="Nome de utilizador"/>
                    <input type="text" className="form-control" placeholder="Data de nascimento"/>
                    <input type="text" className="form-control" placeholder="Email"/>
                    <input type="text" className="form-control" placeholder="Password"/>
                    <input type="text" className="form-control" placeholder="Nº de Conta"/>

                    <Link to="/options">
                        {/*<button type="submit" className="btn btn-primary col-xs-5" id="registo-buttons" >*/}
                        <button type="button" className="btn btn-primary col-xs-5" id="registo-buttons" >
                            Registar
                        </button>
                    </Link>
                    {/*
                     <button type="button" className="btn btn-default col-xs-5 facebook" id="registo-buttons">Registar Facebook</button>*/}

                </form>
            </div>

        );
    }


    _submit(event) {
        event.preventDefault();
        const {dispatch} = this.props;
        const form = document.querySelector('#form');
        const data = new FormData(form);
        dispatch(postContact(data));
    }
}

/*const mapStateToProps = (state, ownProps) => {
 // console.info('container App mapStateToProps', state, ownProps);
 return state.contacts;
 }                                                       --- --- --- Axo que não é preciso -V*/

export default Registo
/* connect(mapStateToProps)(App);                           --- --- --- Axo que não é preciso -V*/
