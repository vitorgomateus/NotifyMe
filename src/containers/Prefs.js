/**
 * Created by VitorMaGo on 12/01/2017.
 */
import React from 'react';
import {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import Splash from '../components/Splash';
import swal from 'sweetalert';
import '../../node_modules/sweetalert/dist/sweetalert.css';
import '../css/prefs.css';

import Constants from '../constants/constNum';

import {fetchChannels} from '../actions';
import {fetchPrefs} from '../actions';
import {postPref, deletePref} from '../actions';

class Prefs extends Component {

    // quando cria cria o state limpo
    constructor(props) {
        super(props);

        //tirado de Cont/List.jsx from Ex. Lá estava em render()
        //const tcanais = this.props.channels;
        //const htmlContent = isFetching ? <p>Loading...</p> : <ListComponent items={items} />;

        this.setPref = this.setPref.bind(this);
        //settings.setDomStorageEnabled(true);//                                                                ---LocalStorage---
    }



    componentDidMount() {
        //console.log(this.props, "PREFS-CDM props");

        const {dispatch} = this.props;
        dispatch(fetchChannels());
    }


    //isto possivelmente deixará de existir. aqui só se coordena as preferÊncias com a localStorage, poruqe na API são feitas por cadaacção nos botões
    updatePrefs(uprefs, uprefsId) {
        //console.log("P1.PREFS setItem", "upprefs", uprefs, "upprefsId", uprefsId);
        window.localStorage.removeItem("userPrefs");
        window.localStorage.removeItem("userPrefsId");
        window.localStorage.setItem("userPrefs", JSON.stringify(uprefs));//                                       ---LocalStorage
        window.localStorage.setItem("userPrefsId", JSON.stringify(uprefsId));//                                       ---LocalStorage

        //    this.forceUpdate();
        const {dispatch} = this.props;
        //dispatch(fetchPrefs());
    }

    //chamado no click deum botão, recebe a sigla do canal desse butão
    //confirma se ja tem a preferência  -> retira o canal das preferenias
    //ELSE confirma se ja tem 4 preferÊncias  -> alert('max 4!')
    //ELSE adiciona canal a prefrências e manda update pa store
    setPref(canal, canalId) {


        const {dispatch} = this.props;
        var numDePref = Constants.numPref;

        var prefremoved = false;
        //var userprefs = this.state.prefers;//["RTP1","TVI","RTPM","SPTV3"];
        var userprefs = this.props.preferences.upreferencias; //JSON.parse(window.localStorage.getItem("userPrefs"));                   ---LocalStorage
        var userprefsIds = this.props.preferences.upreferenciasId;
        //console.log("P4.PREFS setPref", "upprefs", userprefs, "upprefsId", userprefsIds);


        if(userprefs){
            userprefs.forEach((itemo, u) => {
                if (itemo === canal) {
                    userprefs.splice(u, 1);
                    userprefsIds.splice(u, 1);
                    prefremoved = true;
                    dispatch(deletePref(canal));
                }
            });
        }
        if (!prefremoved) {
            //if(userprefs)
            if (userprefs.length === numDePref) {
                //alert("Máximo 4 preferÊncias");
                swal("Já chega!","A equipa pede desculpa mas de momento não é possível adicionar mais de "+numDePref+" preferências.","warning"); //                                                    --- SWEETALERT
            } else {
                userprefs.push(canal);
                userprefsIds.push(canalId);
                dispatch(postPref(canal));

            }
        }

        //this.updatePrefs(userprefs, userprefsIds);
    }

    render() {


        //console.log("PREFS numPrefs", Constants.numPref);

        const isFetching = this.props.channels.isFetching;
        //console.log(this.state, 'prefs state');
        console.log('prefs props',this.props.preferences.upreferencias, this.props.upreferenciasId);

        if(!isFetching) {
            const channels = this.props.channels.tcanais.map((item, i) => {

                var classer = "btn-sm btn-default";

                var canalCallLetter = item.CallLetter;
                var canalCatalogNumber = item.CatalogOrderNumber;

                var x = this.props.preferences.upreferencias;
                //var x = JSON.parse(window.localStorage.getItem("userPrefs"));
                var moreprefers = x?x:["RTP1","TVI","RTPM","HOLHD"];

                if (moreprefers) {
                    moreprefers.forEach(function (prefCallLetter) {
                        if (prefCallLetter === canalCallLetter) {
                            classer = "btn-sm btn-success";
                        }
                    });
                }

                //console.log("P0.PREFS RNDR", "upprefs", canalCallLetter, "upprefsId", canalCatalogNumber);
                return (
                    <div key={i} className="col-xs-4 col-sm-4 col-md-3 col-lg-2 celulas">
                        <button id={canalCallLetter} type="button" className={ classer } onClick={() => this.setPref(canalCallLetter, canalCatalogNumber)}>
                            {item.Name}<br/>
                            {/*{moreprefers?"true":"false"}*/}
                        </button>
                    </div>
                );
            });

            return (
                <div id="layout-content" className="prefs-wrapper">
                    <h2>Destaque os seus canais favoritos:</h2>
                    <Link to="/home">
                        <button type="button" className="btn btn-primary">Finalizar Escolha</button>
                    </Link>
                    <p>(máx.: {Constants.numPref})</p>
                    <div className="prefs-list">{ channels }</div>
                </div>
            );
        }else{
            return(
                <div className="prefsLoading">
                    <h1>Loading Prefs</h1>
                    <Splash />
                </div>
            );
        }
    }

    /*render() {

     return (
     <div className="prefs">
     <form action="#" method="post">
     <ItemList products={CHANNELS} />
     </form>
     </div>
     );
     }*/
}

Prefs.propTypes = {
    channels: PropTypes.object,
    preferences: PropTypes.object
}

const mapStateToProps = (state, ownProps) => {
    //console.info('PREFS-STP state', state);
    //console.log('PREFS-STP ownprops', ownProps);
    return {channels: state.channels, preferences: state.preferences}
}

export default connect(mapStateToProps)(Prefs);
