/**
 * Created by VitorMaGo on 12/01/2017.
 */
import React from 'react';
import {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import Splash from '../components/Splash';
import SearchInput, {createFilter} from 'react-search-input'
import swal from 'sweetalert';
import '../../node_modules/sweetalert/dist/sweetalert.css';
import '../css/prefs.css';

import Constants from '../constants/constNum';

import {fetchChannels} from '../actions';
import {fetchPrefs} from '../actions';
import {postPref, deletePref, resetWaitPref} from '../actions';

class Prefs extends Component {

    constructor(props) {
        super(props);

        this.state = {posX: 0, posY: 0, searchTerm: ''};
        this.setPref = this.setPref.bind(this);
        this.searchUpdated = this.searchUpdated.bind(this);
        this.setCoords = this.setCoords.bind(this);
        this.shoot = this.shoot.bind(this);
    }



    componentWillMount() {

        const {dispatch} = this.props;
        dispatch(fetchPrefs());
        dispatch(resetWaitPref());
        dispatch(fetchChannels());
    }


    componentWillUnmount(){

    }

    componentDidUpdate(){
        var lefto = this.state.posX;
        var topo = this.state.posY;
        window.scrollTo(lefto, topo);
        var isPrevEditDone= this.props.wasEditDone;
        var prevEdit = this.props.wichLastEdit;

        var porra = this;
        if(!isPrevEditDone){
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

            swal({
                    title: "Ooops...",
                    text: "Houve um problema com o servidor e não foi possível realizar a última alteração que fez. \n\n Quer tentar outra vez?",
                    type: "warning",
                    showCancelButton: false,
                    confirmButtonColor: "#00847a",
                    confirmButtonText: "Amigos na mesma.",
                    closeOnConfirm: true

                },
                function(){
                    console.log("WAINTG FINISH?", isPrevEditDone);
                    porra.shoot();
                });
        }
    }

    shoot(){
        const {dispatch} = this.props;
        dispatch(resetWaitPref());
    }

    setCoords(){
        var doc = document.documentElement;
        var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
        var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
        window.localStorage.setItem("posX", left);
        window.localStorage.setItem("posY", top);
        this.setState({posX: left, posY: top});
    }
    //chamado no click deum botão, recebe a sigla do canal desse butão
    //confirma se ja tem a preferência  -> retira o canal das preferenias
    //ELSE confirma se ja tem 4 preferÊncias  -> alert('max 4!')
    //ELSE adiciona canal a prefrências e manda update pa store
    setPref(canal) {
        this.setCoords();


        const {dispatch} = this.props;
        var numDePref = Constants.numPref;

        var prefremoved = false;
        var userprefs = this.props.preferences;


        if(userprefs && canal!=="OOOOO"){
            userprefs.forEach((itemo, u) => {
                if (itemo === canal) {
                    //      ---------------------------------------------------------------------------      Remove Pref
                    console.log("0 DP");
                    prefremoved = true;
                    dispatch(deletePref(canal));
                }
            });
        }
        if (!prefremoved) {
            if (userprefs.length === numDePref) {
                swal("Já chega!","A equipa pede desculpa mas de momento não é possível adicionar mais de "+numDePref+" preferências.","warning"); //  --- SWEETALERT
            } else {
                //      -----------------------------------------------------------------------------------     Add Pref
                console.log("0 PP");

                dispatch(postPref(canal));
            }
        }
    }

    render() {
        var numDePref = Constants.numPref;

        const isFetching = this.props.channels.isFetching;
        var doneWaiting = this.props.waited;

        var x = this.props.preferences;
        var moreprefers = x ? x.slice(0,numDePref) : ["TVI","RTPM","HOLHD"];

        console.log("5.5.Co.Pf. Prefs:", moreprefers, "edit done?", this.props.wasEditDone, "wich:", this.props.wichLastEdit);
        if(!isFetching && doneWaiting) {

            var canaisRaw = this.props.channels.tcanais;

            var canaisSearch = canaisRaw.filter(createFilter(this.state.searchTerm, 'CallLetter'));


            const channels = canaisSearch.map((item, i) => {

                var classer = "btn-sm btn-default";

                var canalCallLetter = item.CallLetter;



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
                        </button>
                    </div>
                );
            });

            return (
                <div id="layout-content" className="prefs-wrapper">
                    <h2 className="canaisFav">Destaque os seus canais favoritos:</h2>
                    <p className="canaisSel">{"'"+
                    this.props.preferences.map((word)=>{
                        console.info("word",word);

                        return (word===",")?" ":(" "+word+" ")
                    })+"'"
                    }</p>
                    <p className="canaisSel">(máx.: {numDePref})</p>
                    <Link to="/home">
                        <button type="button" className="btn btn-primary btn-prefs" onClick={() => this.setCoords()}>Finalizar Escolha</button>
                    </Link>
                    <div className="prefs-list">
                        <SearchInput className="search-input" onChange={this.searchUpdated} />
                        { channels }
                    </div>
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


    searchUpdated (term) {
        this.setState({searchTerm: term})
    }
}

Prefs.propTypes = {
    channels: PropTypes.object,
    preferences: PropTypes.array,
    waited: PropTypes.bool,
    wasEditDone: PropTypes.bool,
    wichLastEdit: PropTypes.any
}

const mapStateToProps = (state, ownProps) => {
    return {channels: state.channels, preferences: state.preferences.upreferencias, waited: state.preferences.waitingdone, wasEditDone: state.preferences.edited, wichLastEdit: state.preferences.lastedit}
}

export default connect(mapStateToProps)(Prefs);
