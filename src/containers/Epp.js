/**
 * Created by VitorMaGo on 15/12/2016.
 */
import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import {connect} from 'react-redux';

import ImgStripe from '../components/ImgStripe';
import IdStripe from '../components/IdStripe';
import PlayStripe from '../components/PlayStripe';
import InfoEpp from '../components/InfoEpp';

import '../css/epp.css';

var programa;
//-----------------IMG Stripe
var source;
//-----------------ID Stripe
var nomeProg;
//var eppSea;
var eppNum;
//-----------------PLAY Stripe
var eppId;
var startTime;
var startTimeStamp;
//-----------------INFO Stripe
var nomeEpp;
var descricao;

class Epp extends Component {

    constructor(props) {
        super(props);
    }

    /*componentDidMount() {
     this.GetProgramDetails();
     }*/
    componentWillMount(){
        this.GetProgramDetails();
    }

    // vai buscar os canais dados pela API da sapo meo      -------------- JÀ NÔ È PRECISO
    //      Afinal é só em caso a página faça refresh porque aparentemente os props não estão
    //      disponíveis quando a página faz refresh.        ----------------------------------------------------- DEV DO
    //          EDIT ---    agora também retira todos os dadozinhos para construir a view. yay
    GetProgramDetails() {

        var esteId= this.props.params.id;
        //console.log("propId: ", esteId);
        var todosProgs = this.props.programs;
        //console.log("EPP PROPS", this.props);
        programa;
        todosProgs.forEach(function(cadaProg){
            if(cadaProg.Id===esteId){
                //console.log("EPP ID", "esteId"+esteId, "esteProgId"+cadaProg.Id, todosProgs);
                programa = cadaProg;
            }
        });
        console.log("PROGRAMA", programa);
        if(!programa){
            //console.log("Should have pushed");        //      volta pà home se não houver conteúdo --- SUCCESS
            browserHistory.push('/home');
        }

        //-----------------IMG Stripe
        var strung = programa.ImageUri;//program.src;

        source = strung.replace("/M","/L");

        //-----------------ID Stripe
        nomeProg = programa.Title;
        /*
         var season = program.so;//                               --- not needed
         */
        eppNum = programa.SeriesEpisodeNumber;

        //-----------------PLAY Stripe
        eppId = programa.Id;

        var x = programa.StartTime;
        startTime = x.replace(":","h");

        // --- "/Date(1485806400000)/"
        startTimeStamp = programa.StartDate.slice(6,19);

        //-----------------INFO Stripe
        //      -------------------------------------------------------      era fiche distinguir nome de série e de epp
        nomeEpp= programa.Title;
        descricao = programa.Synopsis;

    }


    render (){
        return(
            <div className="eppContainer">

                <ImgStripe src={source}/>

                <div>
                    <IdStripe pn={nomeProg} enu={eppNum}/>{/* es={season} */}
                    <PlayStripe ei={eppId} st={startTime} sts={startTimeStamp} item={programa}/>
                    <InfoEpp en={nomeEpp} ed={descricao}/>
                </div>
            </div>
        );

    }
}

Epp.defaultProps ={
    params: {Id: null}
}


Epp.propTypes = {
    programs: PropTypes.array,
    progFetcher: PropTypes.bool
}

const mapStateToProps = (state, ownProps) => {
    //console.info('container List mapStateToProps state', state);
    //console.log('LIST-STP props', state, ownProps);
    return {programs: state.programs.fprogramas, progFetcher: state.programs.isFetching};
}

export default connect(mapStateToProps)(Epp);

/*npm install react-easy-swipe --save

 Usage
 import React, {Component} from 'react';
 import ReactDOM from 'react-dom';
 import Swipe from './react-swipe';

 class MyComponent extends Component {
 onSwipeStart(event) {
 console.log('Start swiping...', event);
 }

 onSwipeMove(position, event) {
 console.log(`Moved ${position.x} pixels horizontally`, event);
 console.log(`Moved ${position.y} pixels vertically`, event);
 }

 onSwipeEnd(event) {
 console.log('End swiping...', event);
 }

 render() {
 const boxStyle = {
 width: '100%',
 height: '300px',
 border: '1px solid black',
 background: '#ccc',
 padding: '20px',
 fontSize: '3em'
 };

 return (
 <Swipe
 onSwipeStart={this.onSwipeStart}
 onSwipeMove={this.onSwipeMove}
 onSwipeEnd={this.onSwipeEnd}>
 <div style={boxStyle}>Open the console and swipe me</div>
 </Swipe>
 );
 }
 }

 ReactDOM.render(<MyComponent/>, document.getElementById('root'));*/