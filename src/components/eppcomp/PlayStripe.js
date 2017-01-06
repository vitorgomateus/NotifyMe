/**
 * Created by VitorMaGo on 03/01/2017.
 */
import React, { Component } from 'react';
import Play from '../../img/play_btn.png';
import '../../css/playstripe.css';

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
        var n = d.getTime();

        var datetime;
        var delta = n-horaNoAR;/*
        if(delta<60){
            datetime = "Há" + delta + "segundos.";
        }else if(delta<3600){
            datetime = "Há" + (delta/60) + "minutos.";
        }else if(delta <72000){
            datetime = "Há" + (delta/60/60) + "horas.";
        }else{}*/
            var currentdate = new Date(horaNoAR*1000);
            datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/"
                + currentdate.getFullYear() + " @ "
                + currentdate.getHours() + ":"
                + (currentdate.getMinutes()<10?'0':'')
                + currentdate.getMinutes();





        return(
            <div>
                <p>{datetime}</p>
                <div className="playArea">
                    <img className="playBtn" src={Play}/>
                </div>
            </div>
        );
    }
}

PlayStripe.defaultProps ={
    params: {id: 'there.s no Episode to play to display'}
}

export default PlayStripe