/**
 * Created by VitorMaGo on 03/01/2017.
 */
import React, { Component } from 'react';
import Play from '../../public/img/play_btn.png';
import '../css/eppplaystripe.css';

class PlayStripe extends Component {

    constructor(props) {
        super(props);

        this.PlayOn = this.PlayOn.bind(this);
    }


    PlayOn(objecto){
        // enviar epp para o histórico.
        // import {setProgHistory} from '../actions';
        // dispatch(setProgHistory(objecto));
        console.log("PLAY Objecto: ", objecto);
    }

    render (){
        //hora a que o programa saiu, ou vai sair
        var horaRaw = this.props.sts;
        //console.log("PLAY HORA RAW: ", horaRaw);
        var airTime = this.props.st;


        /*

        console.log("Hora no ar, 1: "+horaRaw);

        var horaStrg = this.props.at;//horaRaw.replace(" ", "T")+"Z";

        console.log("horaStrg: "+horaStrg);

        */

        var horaNoAR= new Date(horaRaw);
        //console.log("PLAY horaNoAr.newDate: ",horaNoAR);
// isto é para determinar o que aparece no canto à beira do playbutton.
// dirá a data e/ou a hora a que o episódio saiu
// mas se saíu há menos de 20 horas apareceria uma texto a dizer à quanto tempo siu: "Saiu hà duas horas"
// se saiu há menos de uma hora : "Saiu há 25 mints"
// etc.
// Sendo que o resultado fica na var [datetime] para depois ser usado.

        // TODAY
        var d = new Date();
        var ds = Math.round(d.getTime()/1000); // em segundos
        var as = Math.round(horaNoAR.getTime()/1000); // hora do programa em segundos
        //console.log("PLAY d_agora: "+d, "\n"+"ds_mt_rd: "+ds+"\n"+"d_gT: "+d.getTime()+"\n"+"horanoAR: "+horaNoAR+"\n"+"horNA_GT: "+horaNoAR.getTime()+"\n"+"horNA_S: "+as);


        var datetime;
        var deltaS = as-ds;// diferença de horas em segundos
        var deltaM = Math.round(deltaS/60);// em mins
        var deltaH = Math.round(deltaM/60);// e em horas
        var textS = (( deltaS === 1 ) ? " segundo." : " segundos.");
        var textM = (( deltaM === 1 ) ? " minuto." : " minutos.");
        var textH = (( deltaH === 1 ) ? " hora." : " horas.");



        //console.log("deltaS"+deltaS);
        // 20h = 72 000 segs
        //  1h =  3 600 segs
        // se faltar 5 mins, deltaS = 5*60
        if( deltaS > (-72000) && deltaS <= (-3600) ){
            datetime = "No ar daqui a " + (-deltaH) + (textH);
        }else if( deltaS > (-3600) && deltaS <= (-60) ){
            datetime = "No ar daqui a " + (-deltaM) + (textM);
        }else if ( deltaS > (-60) && deltaS < 0 ){
            datetime = "No ar daqui a " + (-deltaS) + textS;
        }else if( deltaS >= 0 && deltaS <= 15 ){
            datetime = "Fresquinho acabadinho de entrar no ar!!";
        }else if( deltaS > 15 && deltaS < 60 ){
            datetime = "No ar há " + deltaS + textS;
        }else if( deltaS >= 60 && deltaS < 3600 ){
            datetime = "Há " + (deltaM) + textM;
        }else if(deltaS <72000){
            datetime = "Há " + (deltaH) + textS;
        }else{
            //var currentdate = new Date(horaNoAR*1000);
            var mins = horaNoAR.getMinutes();
            var currentminutes = (mins<10)?("0"+ mins):mins;
            datetime = horaNoAR.getDate() + "/"
                + (horaNoAR.getMonth()+1)  + "/"
                + horaNoAR.getFullYear() + " @ "
                + horaNoAR.getHours() + ":"
                + currentminutes;
        }

        //datetime= "Dev.Erro";




        return(
            <div className="epprow">
                <p>{airTime}{/*?{datetime}*/}</p>
                <div className="playArea">
                    <img className="playBtn" src={Play} alt="Play this episode." onClick={() => this.PlayOn(this.props.item)}/>
                </div>
            </div>
        );
    }
}

PlayStripe.defaultProps ={
    params: {id: 'there.s no Episode to play to display'}
}

export default PlayStripe