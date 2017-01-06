/**
 * Created by VitorMaGo on 15/12/2016.
 */
import React, { Component } from 'react';
import ImgStripe from './eppcomp/ImgStripe';
import IdStripe from './eppcomp/IdStripe';
import PlayStripe from './eppcomp/PlayStripe';
import InfoEpp from './eppcomp/InfoEpp';

import '../css/epp.css';

var lista = [
    {id: '0', progrTitle: 'Breaking Bad', so:'02', ep:'03', canal:'FOX', airTime: '1482696013', src:'brkbad.png', epName: 'Ozymandias'},
    {id: '1', progrTitle: 'Breaking Bad', so:'02', ep:'04', canal:'FOX', airTime: '1482702013', src:'brkbad.png', epName: 'EpNameYa'},
    {id: '2', progrTitle: 'The Voice Portugal', so:'04', ep:'07', canal:'SIC', airTime: '1483256013', src:'theVoice.png'},
    {id: '3', progrTitle: 'Amor Maior', so:'01', ep:'02', canal:'Nat-Geo', airTime: '1488946013', src:'Amormaior.png'},
    {id: '4', progrTitle: 'Notícias da noite', so:'2016', ep:'15/11', canal:'TVI', airTime: '1486546013', src:'Tvi24logo.png'},
    {id: '5', progrTitle: 'Jornal da Noite', so:'2016', ep:'12/12', canal:'SIC', airTime: '1212696013', src:'sicLogo.png'}
];

class Epp extends Component {

    render (){

        var episodio = [];
        var episodioID = this.props.params.id;
        lista.forEach(function(episode) {
            if (episode.id == episodioID) {
                episodio=episode;
            }
        });


        if (episodio.progrTitle == null) {
            episodio.progrTitle = "No Episode to Display"
        };


        var source = episodio.src;
        var nomeprog = episodio.progrTitle;
        var eppid = episodio.id;
        var season = episodio.so;
        var epnum = episodio.ep;
        var airtime = episodio.airTime;

        return(
            <div className="eppContainer">
                <ImgStripe src={source}/>

                <div className="eppSubCont">
                    <IdStripe nm={nomeprog} se={season} ep={epnum}/>
                <PlayStripe ei={eppid} at={airtime}/>
                <InfoEpp dt={eppid}/>
            </div>
    </div>
    );
    }
}

Epp.defaultProps ={
    params: {id: 'there.s no episode to display'}
}

export default Epp