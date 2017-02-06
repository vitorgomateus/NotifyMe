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


        // this.state = {waiterEdit: "niente", waiterCanal: "niente", waiterCanalId: ""};
        this.setPref = this.setPref.bind(this);
        //settings.setDomStorageEnabled(true);//                                                                ---LocalStorage---
    }



    componentWillMount() {
        //console.log(this.props, "PREFS-CDM props");

        const {dispatch} = this.props;
        dispatch(fetchPrefs());
        dispatch(fetchChannels());
    }
    /* componentWillUpdate() { dispatch(fechPrefs()) ---> keepsdoing many fetch


     componentDidMount(){
     console.log("5.8.CoDidMount");

     }*/

    componentDidUpdate(){
        //console.info("5.8.CoDidUpdate");
        var isPrevEditDone= this.props.wasEditDone;
        var prevEdit = this.props.wichLastEdit;

        if(!isPrevEditDone){
            //console.log("P.R. Wich Pref Edited:", prevEdit, "\nIs: ", isPrevEditDone);
            swal("Ooops...","Houve um problema com o servidor e não foi possível realizar a última alteração que fez. \n\n Por favor tente outra vez dentro de momentos.","warning");
            // swal({
            //         title: "Ooops...",
            //         text: "Houve um problema com o servidor e não foi possível realizar a última alteração que fez. \n\n Quer tentar outra vez?",
            //         type: "warning",
            //         showCancelButton: true,
            //         confirmButtonColor: "#00847a",
            //         confirmButtonText: "Tentar outra vez",
            //         closeOnConfirm: true
            //
            //     },
            //     function(){
            //         this.setPref(prevEdit);
            //     });
        }

    }

    /*
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
     }*/

    //chamado no click deum botão, recebe a sigla do canal desse butão
    //confirma se ja tem a preferência  -> retira o canal das preferenias
    //ELSE confirma se ja tem 4 preferÊncias  -> alert('max 4!')
    //ELSE adiciona canal a prefrências e manda update pa store
    setPref(canal) {


        const {dispatch} = this.props;
        var numDePref = Constants.numPref;

        var prefremoved = false;
        //var userprefs = this.state.prefers;//["RTP1","TVI","RTPM","SPTV3"];
        var userprefs = this.props.preferences; //JSON.parse(window.localStorage.getItem("userPrefs"));                   ---LocalStorage
        //var userprefsIds = this.props.preferences.upreferenciasId;
        //console.log("P4.PREFS setPref", "upprefs", userprefs, "upprefsId", userprefsIds);


        if(userprefs){
            userprefs.forEach((itemo, u) => {
                if (itemo === canal) {
                    //      ---------------------------------------------------------------------------      Remove Pref
                    console.log("0 DP");
                    //userprefs.splice(u, 1);
                    //userprefsIds.splice(u, 1);
                    prefremoved = true;
                    /*
                     // console.log("Pref removing2");
                     this.setState({
                     waiterEdit: "remover",
                     waiterCanal: canal,
                     waiterCanalId: canalId
                     })
                     .then();*/
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
                //      -----------------------------------------------------------------------------------     Add Pref
                console.log("0 PP");
                //userprefs.push(canal);
                //userprefsIds.push(canalId);


                dispatch(postPref(canal));
                //console.log("Pref Adding2");
                /*this.setState({
                 waiterEdit: "adicionar",
                 waiterCanal: canal,
                 waiterCanalId: canalId
                 });*/
            }
        }
        //this.updatePrefs(userprefs, userprefsIds);
    }

    render() {
        var numDePref = Constants.numPref;

        const isFetching = this.props.channels.isFetching;
        var doneWaiting = this.props.waited;

        var x = this.props.preferences;
        var moreprefers = x ? x.slice(0,numDePref) : ["TVI","RTPM","HOLHD"];

        console.log("5.5.Co.Pf. Prefs:", this.props.preferences, "edit done?", this.props.wasEditDone, "wich:", this.props.wichLastEdit);

        if(!isFetching && doneWaiting) {

            const channels = this.props.channels.tcanais.map((item, i) => {

                var classer = "btn-sm btn-default";

                var canalCallLetter = item.CallLetter;
                var canalCatalogNumber = item.CatalogOrderNumber;



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
                        <button id={canalCallLetter} type="button" className={ classer } onClick={() => this.setPref(canalCallLetter)}>
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
                    <p>(máx.: {})</p>
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
    preferences: PropTypes.array,
    waited: PropTypes.bool,
    wasEditDone: PropTypes.bool,
    wichLastEdit: PropTypes.any
}

const mapStateToProps = (state, ownProps) => {
    //console.info('PREFS-STP state', state);
    //console.log('PREFS-STP ownprops', ownProps);
    return {channels: state.channels, preferences: state.preferences.upreferencias, waited: state.preferences.waitingdone, wasEditDone: state.preferences.edited, wichLastEdit: state.preferences.lastedit}
}

export default connect(mapStateToProps)(Prefs);
