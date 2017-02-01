import React from 'react';
import {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
/*
import Splash from '../components/Splash';*/
import List from '../components/List';

import {fetchPrograms, resetPrograms} from '../actions';

class ListFunction extends Component {


    constructor(props) {
        super(props);
        this.ProgrList = this.ProgrList.bind(this);

        //console.log("LIST_FUNC HAPPENS", this.props);
    }

    componentDidMount() {
        this.ProgrList();
    }
    componentDidUpdate(){
        this.ProgrList();
    }
    ProgrList(){

        const {dispatch} = this.props;
        dispatch(resetPrograms());
        var n = new Date();

        var D = n.getTime() - (0.2 * 60 * 60 * 1000);       //desde
        var d = new Date(D);

        var dM = d.getMonth() + 1;
        dM = (dM >= 10) ? dM : (`0` + dM);
        var dD = d.getDate();
        dD = (dD >= 10) ? dD : (`0` + dD);
        var dHo = d.getHours();
        dHo = (dHo >= 10) ? dHo : (`0` + dHo);
        var dMi = d.getMinutes();
        dMi = (dMi >= 10) ? dMi : (`0` + dMi);
        var dSe = d.getSeconds();
        dSe = (dSe >= 10) ? dSe : (`0` + dSe);

        var intervaloDatas = `%27%20and%20StartDate%20ge%20datetime%27` + d.getFullYear() + `-` + dM + `-` + dD + `T` + dHo + `:` + dMi + `:` + dSe + `%27&$format=JSON`;


        var prefsReady = !this.props.preferences.isFetchingPrefs;
        //console.log("LIST_FUNC.isFetch.PPP:", prefsReady);
        if(prefsReady) {

            //console.log("LIST_FUNC.isFetch: ", prefsReady);
            var moreprefers = this.props.preferences.upreferencias;
            //      -------------------------------------------------------------------- record in state number of prefs

            //console.log("1.1.LIST_FUNC morePrefers_X", x);
            //var moreprefers = x ? x : ["RTP1", "RTPM", "HOLHD"];
            //console.log("1.2.LIST_FUNC moreprefers ", moreprefers.length);

            var startString = `http://services.online.meo.pt/Data/2013/11/programs/EpgLiveChannelPrograms?$top=4&$orderby=StartDate%20asc&$filter=CallLetter%20eq%20%27`;
            var itemsProcessed = 0;
            moreprefers.forEach(function (prefCallLetter, j) {
                //var totalFetchProgsString = prefCallLetter + intervaloDatas;
                //var startString= `http://services.online.meo.pt/Data/2013/11/programs/EpgLiveChannelPrograms?$top=4&$orderby=StartDate%20asc&$filter=CallLetter%20eq%20%27`;
                var totalProgrString = ``+startString +``+prefCallLetter+``+ intervaloDatas+``;
                //k.push(totalProgrString);
                console.log("2.2."+j+"LIST_FUNC pref_ITE fetchP_St ", totalProgrString);

                itemsProcessed++;
                if(itemsProcessed === moreprefers.length) {
                    //console.log("PROGRAMS RESET!",itemsProcessed,moreprefers.length);

                    dispatch(resetPrograms());
                }

                dispatch(fetchPrograms(totalProgrString, moreprefers.length, j));

            });

            //var totalProgrString = `` + startString + `` + moreprefers[0] + `` + intervaloDatas + ``;

            //console.log("2.2.2.LIST_FUNC pref_ITE fetchP_St ", totalProgrString);
            //dispatch(fetchPrograms(totalProgrString));
        }else{
            //console.log("Why it don't work?");
            /*
             //this.forceUpdate();
             var timerDone = false;
             if(!timerDone) {
             setTimeout(function () {
             dispatch(fetchPrefs());
             }, 3000);
             timerDone = true;
             }*/
        }



    }
    // vai buscar os canais dados pela API da sapo meo-----------------------------------------------   APAGAR?
    ProgrListTEMP() {
        //-------------------------------------------------------------determinar horas para meter na call à API da sapo
        var n = new Date();                         //milliseconds
        var D = n.getTime() - (0.5 * 60 * 60 * 1000);       //desde
        //var A = n.getTime() + (2 * 60 * 60 * 1000);         //até

        //var a = new Date(A);
        var d = new Date(D);


        var dM = d.getMonth() + 1;
        dM = (dM >= 10) ? dM : (`0` + dM);
        var dD = d.getDate();
        dD = (dD >= 10) ? dD : (`0` + dD);
        var dHo = d.getHours();
        dHo = (dHo >= 10) ? dHo : (`0` + dHo);
        var dMi = d.getMinutes();
        dMi = (dMi >= 10) ? dMi : (`0` + dMi);
        var dSe = d.getSeconds();
        dSe = (dSe >= 10) ? dSe : (`0` + dSe);

        //var aM = a.getMonth() + 1;
        //aM = (aM > 10) ? aM : (`0` + aM);
        //var aD = a.getDate();
        //aD = (aD > 10) ? aD : (`0` + aD);
        //var intervaloDatas = '%27%20and%20StartDate%20ge%20datetime%27'+d.getFullYear()+'-'+dM+'-'+dD+'T'+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds()+'%27%20and%20EndDate%20le%20datetime%27'+a.getFullYear()+'-'+aM+'-'+aD+'T'+a.getHours()+':'+a.getMinutes()+':'+a.getSeconds()+'%27&$format=JSON';
        var intervaloDatas = `%27%20and%20StartDate%20ge%20datetime%27` + d.getFullYear() + `-` + dM + `-` + dD + `T` + dHo + `:` + dMi + `:` + dSe + `%27&$format=JSON`;

        //console.log("1.LIST_FUNC intervalo Datas ", intervaloDatas);

        //-----------------------------------------------------------pegar em preferências e user default caso não hajam
        var x = this.props.preferences.upreferencias;
        //console.log("1.1.LIST_FUNC morePrefers_X", x);
        var moreprefers = x ? x : ["RTP1", "RTPM", "HOLHD"];
        //console.log("1.2.LIST_FUNC moreprefers ", moreprefers);

        //------------------------------------------------------------ a call à API da sapo deverá ser algo deste género
        const {dispatch} = this.props;
        var k = [];
        /*var sA;
         var sB;
         var sC;
         var sD;*/
        if (moreprefers[0]) {
            /*for(var j=0;j<moreprefers.length;j++){
             var startString= `http://services.online.meo.pt/Data/2013/11/programs/EpgLiveChannelPrograms?$top=4&$orderby=StartDate%20asc&$filter=CallLetter%20eq%20%27`;
             var totalProgrString = ``+startString +``+moreprefers[j]+``+ intervaloDatas+``;

             k[j]= totalProgrString;
             console.log("2.LIST_FUNC pref_ITE fetchP_St"+j+": ", totalProgrString);
             //dispatch(fetchPrograms(totalProgrString));
             }*/



            moreprefers.forEach(function (prefCallLetter, j) {
                //var totalFetchProgsString = prefCallLetter + intervaloDatas;
                var startString= `http://services.online.meo.pt/Data/2013/11/programs/EpgLiveChannelPrograms?$top=4&$orderby=StartDate%20asc&$filter=CallLetter%20eq%20%27`;
                var totalProgrString = ``+startString +``+prefCallLetter+``+ intervaloDatas+``;
                k.push(totalProgrString);
                //console.log("2.LIST_FUNC pref_ITE fetchP_St"+j+": ", totalProgrString);
                //dispatch(fetchPrograms(totalProgrString));

            });
            var startString= `http://services.online.meo.pt/Data/2013/11/programs/EpgLiveChannelPrograms?$top=4&$orderby=StartDate%20asc&$filter=CallLetter%20eq%20%27`;
            var totalProgrString = ``+startString +``+moreprefers[0]+``+ intervaloDatas+``;
            k.push(totalProgrString);
            //console.log("2.2.2.LIST_FUNC pref_ITE fetchP_St: ", totalProgrString);
            dispatch(fetchPrograms(totalProgrString));

            //console.log("2.2.LIST_FUNC k:",k);
            /*
             sA = k[0];
             dispatch(fetchPrograms(sA));
             sB = k[1];
             dispatch(fetchPrograms(sB));
             sC = k[2];
             dispatch(fetchPrograms(sC));
             sD = k[3];
             dispatch(fetchPrograms(sD));*/

        }

        // ---------------------------------------------------- iterar pelas preferências para fazer calls à API da sapo
        // -------------------------------------------------------- e sacar a programação de cada canal dentro das prefs
        //var falso = false;
        /*if(falso) {
         y.map((canal, i) => {

         return $.getJSON('http://services.online.meo.pt/Data/2013/11/programs/EpgLiveChannelPrograms?$orderby=StartDate%20asc&$filter=CallLetter%20eq%20%27' + canal + intervaloDatas)
         .then((data) => {
         var p = this.state.foundPrograms;
         p = p ? p : [];
         var w = data.GetProgramListByChannelDateIntervalResponse.GetProgramListByChannelDateIntervalResult.Program;
         //console.log("w de "+i+": "+w);
         var f = w.splice(0, 2);
         //console.log("Devia confirmar isto, mas está a funcionar.\nOs parametros estão a funcionar ao contrário do que li na net mas olha, amigos na mesma.\nw.unspliced: \n"+w+"\n FFF.spliced: \n"+i+f);
         for (var j = 0; j < f.length; j++) {
         //console.log(w[j].Flags);
         delete f[j].Flags;
         delete f[j].Values;
         p.push(f[j]);
         }
         //console.log(p);
         this.setState({foundPrograms: p});    // ---------------- os programas encontrados entram no state

         }).fail(()=> {
         console.log("getJSON FAILED MISERABLY" + i);
         this.setState({requestSuccess: false});

         });
         });
         }*/

    }

    render() {

        //console.log('LIST_FUNC RENDER props', this.props.preferences);
        //this.ProgrList();

        var prefsReady = !this.props.preferences.isFetchingPrefs;
        var quntPrefs = this.props.preferences.upreferencias.length;
        //console.log('4.LIST_FUNC RENDER props', this.props);

        if (prefsReady) {
            if(quntPrefs===0){
                return (
                    <div>
                        <h2>Defina as suas preferências para ver uma lista de programas</h2>
                    </div>
                );
            }else {
                return (
                    <div>
                        <h2>Os meus programas</h2>
                        <List />
                    </div>
                );
            }
        } else {
            return (
                <div className="progrsLoading">
                    <h1 >Loading Programs</h1>{/*style="position:relative;z-index:10;"*/}
                    {/*<Splash />*/}
                </div>
            );
        }
        /*return <Main items={this.props}/>*/
    }
}





ListFunction.propTypes = {
    preferences: PropTypes.object
}

const mapStateToProps = (state, ownProps) => {
    //console.info('container List mapStateToProps state', state);
    //console.log('3.LIST_FUNC-STP props', ownProps);
    return {preferences: state.preferences};
}

export default connect(mapStateToProps)(ListFunction);
