/**
 * Created by VitorMaGo on 15/12/2016.
 */
import React, { Component } from 'react';
import ItemList from './listcomp/ItemList';
import $ from 'jquery';


var EPISODIOS = [
    {id: '0', progrTitle: 'Breaking Bad', so:'02', ep:'03', canal:'FOX', airTime: '23:40', src:'brkbad.png'},
    {id: '1', progrTitle: 'Breaking Bad', so:'02', ep:'04', canal:'FOX', airTime: '01:00', src:'brkbad.png'},
    {id: '2', progrTitle: 'The Voice Portugal', so:'04', ep:'07', canal:'SIC', airTime: '22:40', src:'theVoice.png'},
    {id: '3', progrTitle: 'Amor Maior', so:'01', ep:'02', canal:'Nat-Geo', airTime: '21:30', src:'Amormaior.png'},
    {id: '4', progrTitle: 'Notícias da noite', so:'2016', ep:'15/11', canal:'TVI', airTime: '20:00', src:'Tvi24logo.png'},
    {id: '5', progrTitle: 'Jornal da Noite', so:'2016', ep:'12/12', canal:'SIC', airTime: '20:00', src:'sicLogo.png'}
];



class Main extends Component {

    constructor(props) {
        super(props);

        var x = JSON.parse(window.localStorage.getItem("userPrefs"));
        var y = x?x:["RTP1","TVI","RTPM","SPTV3"];
        this.state = {prefChannels: y, foundPrograms: []};

        //console.log("@constructor:localStorage.userprefs.JSON.parse="+y);
    }

    componentDidMount() {
        this.ChannelList();
    }

    // vai buscar os canais dados pela API da sapo meo
    ChannelList() {



        //determinar horas para meter na call à API da sapo

        var n = new Date();                         //milliseconds
        //var n = Math.round(d.getTime()/1000);       //seconds


        //var d = new Date();
        //document.getElementById("demo").innerHTML = d;

        var D = n.getTime()-(60*60*1000);
        var A = n.getTime()+(2*60*60*1000);
        //d.setHours(n.getHours()-1);
        //a.setHours(n.getHours()+2);

        var a = new Date(A);
        var d = new Date(D);


        var dM = d.getMonth()+1; dM= (dM>10)?dM:("0"+dM);
        var dD = d.getDate(); dD= (dD>10)?dD:("0"+dD);
        var aM = a.getMonth()+1; aM= (aM>10)?aM:("0"+aM);
        var aD = a.getDate(); aD= (aD>10)?aD:("0"+aD);
        //function addZ(n){return n<10? '0'+n:''+n;}
        //x = now time ms
        //a = plus time ms x+2h
        //d = minus timems x-1h
        var intervaloDatas = '&startDate='+d.getFullYear()+'-'+dM+'-'+dD+' '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds()+'&endDate='+a.getFullYear()+'-'+aM+'-'+aD+' '+a.getHours()+':'+a.getMinutes()+':'+a.getSeconds();
        //console.log("prog request: " + "\n"+ n+"\n"+d+"\n"+a+"\n"+dM+"\n"+ dD+"\n"+aM+"\n"+aD+"\n"+intervaloDatas);


        var x = this.state.prefChannels;
        var y = x?x:["RTP1","TVI","RTPM","SPTV3"];
        //              --- checked,all good with 'y'
        //      http://stackoverflow.com/questions/19323699/iterating-through-json-object-javascript
        //               --- ERROR cannot read property 'forEach' of undefined  --- fixed
        y.map((canal, i) => {
            return $.getJSON('http://services.sapo.pt/EPG/GetProgramListByChannelDateIntervaljson?channelSigla='+canal+intervaloDatas)
                .then((data) => {
                    var p = this.state.foundPrograms;
                    p=p?p:[];
                    var w = data.GetProgramListByChannelDateIntervalResponse.GetProgramListByChannelDateIntervalResult.Program;
                    //console.log(i+"chanel list get MEO API"+w[0].Title);
                    //IMPLEMENT iterate through w to get flag and values out
                    /*const z = w.map((item, i) => {
                        console.log(item);

                    });*/
                    for (var j = 0; j<w.length; j++){
                        console.log(w[j].Flags);
                        delete w[j].Flags;
                        delete w[j].Values;
                    }
                    p.push(w);
                    console.log(p);
                    this.setState({ foundPrograms: p });
                }).fail(()=> {
                    console.log("getJSON FAILED MISERABLY"+i);
                    this.setState({requestSuccess: false});

                });
        });
        //console.log("chanel list get MEO API OUT \n"+this.state.foundPrograms[0][0].Title);
        //this.setState({ prefChannels: x});//      wtf is this for?

    }

    render (){


        return(
            <div className="mainContainer">
                <h3>Os meus Programas</h3>
                <ItemList products={this.state.foundPrograms} />
            </div>
        );
    }
}

export default Main

/*

 <Link to={'/epp'} params={palhaco}>
 <div className="row">
 <div className="btn btn-default btn-block">


 <div className="col-sm-4">
 <img src={BBad} style={imgItem} alt={this.props.progrTitle} />
 </div>
 <div className="col-sm-2"></div>
 <div id="mainItem" className="col-sm-6" style={prodRow}>

 <h4>The Voice Portugal</h4>
 <h4>Começa dentro de 1h</h4>
 <h4>RTP</h4>

 <p style={pItem}>{name} <b>{this.props.product.ep}</b></p>
 <p style={pItem}>{this.props.product.airTime}</p>
 <p style={pItem}>{this.props.product.canal}</p>
 </div>

 </div>
 </div>
 <div className="row">
 <div className="col-sm-12" style={line}></div>
 </div>
 </Link>*/
