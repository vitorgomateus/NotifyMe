/**
 * Created by VitorMaGo on 15/12/2016.
 */
import React, { Component } from 'react';
import ImgStripe from './eppcomp/ImgStripe';
import IdStripe from './eppcomp/IdStripe';
import PlayStripe from './eppcomp/PlayStripe';
import InfoEpp from './eppcomp/InfoEpp';
import $ from 'jquery';

import '../../public/css/epp.css';

var lista = [
    {id: '0', progrTitle: 'Breaking Bad', so:'02', ep:'03', canal:'FOX', airTime: '1482696013', src:'brkbad.png', epName: 'Ozymandias'},
    {id: '1', progrTitle: 'Breaking Bad', so:'02', ep:'04', canal:'FOX', airTime: '1484237456', src:'brkbad.png', epName: 'EpNameYa'},
    {id: '2', progrTitle: 'The Voice Portugal', so:'04', ep:'07', canal:'SIC', airTime: '1484233880', src:'theVoice.png'},
    {id: '3', progrTitle: 'Amor Maior', so:'01', ep:'02', canal:'Nat-Geo', airTime: '1488946013', src:'Amormaior.png'},
    {id: '4', progrTitle: 'Notícias da noite', so:'2016', ep:'15/11', canal:'TVI', airTime: '1486546013', src:'Tvi24logo.png'},
    {id: '5', progrTitle: 'Jornal da Noite', so:'2016', ep:'12/12', canal:'SIC', airTime: '1212696013', src:'sicLogo.png'}
];


class Epp extends Component {

    constructor(props) {
        super(props);

        this.state = {propId: this.props.params.Id, program: {}};

        //console.log("@constructor:localStorage.JSON="+y);
    }

    componentDidMount() {
        this.GetProgramDetails();
    }

    // vai buscar os canais dados pela API da sapo meo
    GetProgramDetails() {


        var pid= this.props.params.Id;
        console.log("propId: "+pid);

        return $.getJSON('http://services.sapo.pt/EPG/GetProgramByIdjson?programId='+pid)
            .then((data) => {

                var x = data.GetProgramByIdResponse.GetProgramByIdResult;
                delete x.Flags;
                delete x.Values;
                //console.log(i+"chanel list get MEO API"+w[0].Title);
                //IMPLEMENT iterate through w to get flag and values out
                /*const z = w.map((item, i) => {
                 console.log(item);

                 });*/
                //console.log(x);
                //console.log(JSON.stringify(x, null, 2));
                this.setState({program: x})

            }).fail(()=> {
                console.log("getJSON FAILED MISERABLY");
            });

        //console.log("chanel list get MEO API OUT \n"+this.state.foundPrograms[0][0].Title);

    }


    render (){


        /*lista.forEach(function(episode) {
         if (episode.Id == episodioID) {
         episodio=episode;
         }
         });*/

        var program = this.state.program;
        console.log("render pre.if: "+program);
        if(program.Title){

            console.log("render in.if: "+program);
            //-----------------IMG Stripe
            var source = 'logo.png';//program.src;

            //-----------------ID Stripe
            var nomeprog = program.Title;
            if (nomeprog == null) {
                nomeprog = "No Episode to Display"
            };
            var season = program.so;//                               --- not needed
            var epnum = program.ep;//                               --- not needed


            //-----------------PLAY Stripe
            var eppid = program.Id;
            var xyz = program.StartTime;
            console.log("XYZ: "+xyz);
            var airTime = xyz;//.slice(0,9);
            //var startTime = zyx.replace(":","h");

            //-----------------INFO Stripe
            var descricao = program.Description;
            var nomeEpp= program.ShortDescription;

        }

        return(
            <div className="eppContainer">
                <ImgStripe />{/*src={source}*/}

                <div>
                    <IdStripe nm={nomeprog} />{/*se={season} ep={epnum}*/}
                    <PlayStripe ei={eppid} at={airTime}/>
                    <InfoEpp dt={descricao} noepp={nomeEpp}/>
                </div>
            </div>
        );
    }
}

Epp.defaultProps ={
    params: {Id: null}
}

export default Epp