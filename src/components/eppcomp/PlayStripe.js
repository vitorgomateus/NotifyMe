/**
 * Created by VitorMaGo on 03/01/2017.
 */
import React, { Component } from 'react';
import Play from '../../img/play_btn.png';
import '../../css/eppplaystripe.css';

class PlayStripe extends Component {

    render (){
        //hora a que o programa saiu, ou vai sair
        var horaNoAR = this.props.at;


// isto é para determinar o que aparece no canto à beira do playbutton.
// dirá a data e/ou a hora a que o episódio saiu
// mas se saíu há menos de 20 horas apareceria uma texto a dizer à quanto tempo siu: "Saiu hà duas horas"
// se saiu há menos de uma hora : "Saiu há 25 mints"
// etc.
// Sendo que o resultado fica na var [datetime] para depois ser usado.
        var d = new Date();
        var n = Math.round(d.getTime()/1000);

        var datetime;
        var deltaS = n-horaNoAR;
        var deltaM = Math.round(deltaS/60);
        var deltaH = Math.round(deltaM/60);
        var textS = ((deltaS==1)?" segundo.":" segundos.");
        var textM = ((deltaM==1)?" minuto.":" minutos.");
        var textH = ((deltaH==1)?" hora.":" horas.");

        if(deltaS<(-72000)){
            datetime = "Daqui a " + (deltaH) + (textH);
        }else if(deltaS<(-3600)){
            datetime = "Há " + (deltaM) + (textM);
        }else if (deltaS<(-60)){
            datetime = "No ar daqui a " + deltaS + textS;
        }else if(deltaS<60){
            datetime = "No ar há " + deltaS + textS;
        }else if(deltaS<3600){
            datetime = "Há " + (deltaM) + textM;
        }else if(deltaS <72000){
            datetime = "Há " + (deltaH) + textS;
        }else{
            var currentdate = new Date(horaNoAR*1000);
            datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/"
                + currentdate.getFullYear() + " @ "
                + currentdate.getHours() + ":"
                + (currentdate.getMinutes()<10?'0':'')
                + currentdate.getMinutes();
        }

        datetime= "Dev.Erro";



        return(
            <div className="epprow">
                <p>{datetime}</p>
                <div className="playArea">
                    <img className="playBtn" src={Play} alt="Play this episode."/>
                </div>
            </div>
        );
    }
}

PlayStripe.defaultProps ={
    params: {id: 'there.s no Episode to play to display'}
}

export default PlayStripe