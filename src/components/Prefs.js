/**
 * Created by VitorMaGo on 12/01/2017.
 */
import React from 'react';
import {Component} from 'react';
import ItemList from './listcomp/ItemList';
import DataStore from './DataStore';
import swal from 'sweetalert';
import '../../node_modules/sweetalert/dist/sweetalert.css';
import { Link } from 'react-router';
import $ from 'jquery';
import '../css/prefs.css';

class Prefs extends Component {

    // quando cria cria o state limpo
    constructor(props) {
        super(props);


        this.ChannelList = this.ChannelList.bind(this);//     nem sei se é preciso
        //settings.setDomStorageEnabled(true);//                                                                ---LocalStorage---
        var x = JSON.parse(window.localStorage.getItem("userPrefs"));
        var y = x?x:["RTP1","TVI","RTPM","SPTV3"];
        this.state = {channel: [], prefers: y, requestSuccess: true};
        this.setPref = this.setPref.bind(this);
        console.log("@constructor:localStorage.userprefs.JSON.parse="+x);
    }
    /*
     // envia a callback para o event listener da store fazer update deste componente
     componentWillMount() {
     DataStore.subscribe(this.updatePrefs);
     }                                                                                                        ---DataStore

     // reitra a callback para o event listener da store fazer update deste componente
     componentWillUnmount() {
     DataStore.unsubscribe(this.updatePrefs);
     }*/


    componentDidMount() {
        this.ChannelList();
    }

    // vai buscar os canais dados pela API da sapo meo
    ChannelList() {
        return $.getJSON('http://services.sapo.pt/EPG/GetChannelListjson')
            .then((data) => {
                if(!data){
                    console.log(data);
                    this.setState({requestSuccess: false});
                }else {

                    console.log("success Json:"+data);
                    this.setState({requestSuccess: true});
                    this.setState({channel: data.GetChannelListResponse.GetChannelListResult.Channel});
                }
            })
            .fail(()=> {
                console.log("getJSON FAILED MISERABLY");
                this.setState({requestSuccess: false});

            });

    }

    //a datastore chama isto para fazer re-render a este componente
    updatePrefs(upprefs) {
        /*this.setState({                                                                                   ---DataStore
         prefers: DataStore.getPrefs()
         });*/
        this.setState({
            prefers: upprefs
        });
        console.log("obj"+upprefs);
        console.log("strg.obj"+JSON.stringify(upprefs));
        window.localStorage.setItem("userPrefs",JSON.stringify(upprefs));//                                       ---LocalStorage
    }

    //chamado no click deum botão, recebe a sigla do canal desse butão
    //confirma se ja tem a preferência  -> retira o canal das preferenias
    //ELSE confirma se ja tem 4 preferÊncias  -> alert('max 4!')
    //ELSE adiciona canal a prefrências e manda update pa store
    setPref(canal) {

        var prefremoved = false;
        //var userprefs = this.state.prefers;//["RTP1","TVI","RTPM","SPTV3"];
        var userprefs = this.state.prefers;//JSON.parse(window.localStorage.getItem("userPrefs"));//                       ---LocalStorage
        if(userprefs){
            userprefs.forEach((itemo, u) => {
                if (itemo === canal) {
                    userprefs.splice(u, 1);
                    //findElementById(canal).setClass("btn btn-default");        ---    setState faz isto automatico
                    prefremoved = true;
                }
            });
        }
        if (!prefremoved) {
            //if(userprefs)
            if (userprefs.length === 4) {
                //alert("Máximo 4 preferÊncias");
                swal("Já chega!","A equipa pede desculpa mas de momento não é possível adicionar mais de 4 preferências.","warning"); //                                                    --- SWEETALERT
            } else {
                userprefs.push(canal);
                //findElementById(canal).setClass("btn btn-success")    ---    setState faz isto automatico

            }
        }
        /*                                                                                                          ---DataStore
         DataStore.sendPrefs(userprefs);
         */
        this.updatePrefs(userprefs);
        //this.setState({prefers: userprefs});          ---      feito depois em updatePrefs
    }

    render() {



        if(this.state.requestSuccess) {
            const channels = this.state.channel.map((item, i) => {
                var classer = "btn-sm btn-default";
                var pooper = item.Sigla;
                //var moreprefers = this.state.prefers;
                var moreprefers = JSON.parse(window.localStorage.getItem("userPrefs"));//                       ---LocalStorage
                if (moreprefers) {
                    moreprefers.forEach(function (coolio) {
                        if (coolio === pooper) {
                            classer = "btn-sm btn-success";
                        }
                    });
                }

                return (
                    <div className="col-xs-4 col-sm-4 col-md-3 col-lg-2 celulas">
                        <button id={pooper} type="button" className={ classer } onClick={() => this.setPref(pooper)}>
                            {item.Name}<br/>
                            {/*{moreprefers?"true":"false"}*/}
                        </button>
                    </div>
                );
            });

            return (
                <div id="layout-content" className="layout-content-wrapper">
                    <h2>Destaque os seus canais favoritos:</h2>
                    <Link to="/defs">
                        <button type="button" className="btn btn-primary">Finalizar Escolha</button>
                    </Link>
                    <p>(máx.: 4)</p>
                    <div className="panel-list">{ channels }</div>
                </div>
            );
        }else{
            return(
                swal({
                    title: "Channel finder failed :S",
                    text: "It's definitely some temporary problem on the server side. Please try again in a few moments.",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Try again.",
                    cancelButtonText: "Nevermind",
                    closeOnConfirm: false,
                    html: false
                }, ()=>this.ChannelList())
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

export default Prefs;
