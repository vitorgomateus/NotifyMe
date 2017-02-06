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

import Swipe from 'react-easy-swipe';
import swal from 'sweetalert';


import Constants from '../constants/constNum';

const numProgramas = Constants.numProg;

import '../css/epp.css';

var todosProgs;
var programa;
var posEpp;
var esteId;
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
var pessoas;

//-----------------Swipes
var sX;
var sY;

var swipeMove; // 0=nada, 1= direita, -1=esquerda
var nMove = 0;
var moveR = 1;
var moveL = -1;

class Epp extends Component {

    constructor(props) {
        super(props);
        this.GetProgramDetails = this.GetProgramDetails.bind(this);
        this.ChangeProgram = this.ChangeProgram.bind(this);
    }



    onSwipeStart(event) {
        //console.log('Start swiping...', event);
    }
    onSwipeMove(position, event) {
        //console.log(`Moved ${position.x} pixels horizontally`, event);
        //console.log(`Moved ${position.y} pixels vertically`, event);

        sX = position.x;
        sY = position.y;

    }

    onSwipeEnd(event) {
        console.log('End swiping...', sX, sY, event);
        //-300 20

        swipeMove = nMove;
        if (sY > (-80) && sY < 80) {
            if (sX > 20) { // && sX < 120
                swipeMove = moveL;
                console.log("Move Left", sX, sY);
            } else if(sX < (-20)) { // && sX < 120
                swipeMove = moveR;
                console.log("Move Right", sX, sY);
            }
        }
        //this.ChangeProgram(swipeMove);
        // var progArray = this.props.programs;


    }



    ChangeProgram(novo){
        fateId = "end of caroussel.";
        if(todosProgs && novo!==nMove){
            if((novo >0 && posEpp <6)||(novo < 0 && posEpp > 0)){
                var fP = posEpp+novo;
                var fateId = todosProgs[fP].Id;
                browserHistory.push(`/epp/`+fateId+``);
                //replace({pathname: blabla
               // browserHistory.replace({pathname: `/epp/`+fateId+``})
            }else{
                swal("Não há mais :/","A equipa pede desculpa mas de momento só são gerados "+numProgramas+" sugestões. Se não concordar convide-se a comunicar com a equipa de produção, eles são mais simpáticos do que parecem :)","warning");
            }
        }
        console.log("SWIPE CHECK", esteId, fateId, posEpp, swipeMove, fP);
        todosProgs = 0;
        programa = 0;
        posEpp = 0;
        esteId = 0;
        sX = 0;
        sY = 0;
        swipeMove = 0;

    }


    /*componentDidMount() {
     this.GetProgramDetails();
     }*/
    componentWillMount(){
        this.GetProgramDetails();

    }

    componentWillUpdate(){
        this.GetProgramDetails();
        /*if(!programa){
            console.log("Should have pushed");        //      volta pà root se não houver conteúdo --- SUCCESS
            browserHistory.push('/');
        }*/
    }
// vai buscar os canais dados pela API da sapo meo      -------------- JÀ NÔ È PRECISO
//      Afinal é só em caso a página faça refresh porque aparentemente os props não estão
//      disponíveis quando a página faz refresh.        ----------------------------------------------------- DEV DO
//          EDIT ---    agora também retira todos os dadozinhos para construir a view. yay
    GetProgramDetails() {

        esteId = this.props.params.id;
        //console.log("propId: ", esteId);

        //      componente sórecebe o Id, por isso vai pelos props e saca o restodos detalhes do programa
        todosProgs = this.props.programs;
        console.log("EPP PROPS", this.props);

        todosProgs.forEach(function(cadaProg, k){
            if(cadaProg.Id === esteId){
                //console.log("EPP ID", "esteId"+esteId, "esteProgId"+cadaProg.Id, todosProgs);
                programa = cadaProg;
                posEpp = k;
            }
        });



        console.log("PROGRAMA", programa);





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
        pessoas = programa.Participants;

    }


    render (){
        return(
            <div className="eppContainer">
                <div className="btn-sm col-xs-2" style={{zIndex: 3}} onClick={() => this.ChangeProgram(-1)}>previous</div>
                <div className="col-xs-8"></div>
                <div className="btn-sm col-xs-2" style={{zIndex: 3}} onClick={() => this.ChangeProgram(1)}>next</div>
                <Swipe
                    onSwipeStart={this.onSwipeStart}
                    onSwipeMove={this.onSwipeMove}
                    onSwipeEnd={this.onSwipeEnd}>

                    <ImgStripe src={source}/>

                    <div>
                        <IdStripe pn={nomeProg} enu={eppNum}/>{/* es={season} */}


                        <PlayStripe ei={eppId} st={startTime} sts={startTimeStamp} item={programa}/>
                        <InfoEpp en={nomeEpp} ed={descricao} ep={pessoas}/>
                    </div>
                </Swipe>
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
    console.log('LIST-STP props', ownProps);
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