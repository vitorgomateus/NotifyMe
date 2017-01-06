/**
 * Created by VitorMaGo on 15/12/2016.
 */
import React, { Component } from 'react';
import ItemList from './listcomp/ItemList';


var EPISODIOS = [
    {id: '0', progrTitle: 'Breaking Bad', so:'02', ep:'03', canal:'FOX', airTime: '23:40', src:'brkbad.png'},
    {id: '1', progrTitle: 'Breaking Bad', so:'02', ep:'04', canal:'FOX', airTime: '01:00', src:'brkbad.png'},
    {id: '2', progrTitle: 'The Voice Portugal', so:'04', ep:'07', canal:'SIC', airTime: '22:40', src:'theVoice.png'},
    {id: '3', progrTitle: 'Amor Maior', so:'01', ep:'02', canal:'Nat-Geo', airTime: '21:30', src:'Amormaior.png'},
    {id: '4', progrTitle: 'Notícias da noite', so:'2016', ep:'15/11', canal:'TVI', airTime: '20:00', src:'Tvi24logo.png'},
    {id: '5', progrTitle: 'Jornal da Noite', so:'2016', ep:'12/12', canal:'SIC', airTime: '20:00', src:'sicLogo.png'}
];


class Main extends Component {
    render (){


        return(
            <div className="mainContainer">
                <h3>Os meus Programas</h3>
                <ItemList products={EPISODIOS} />
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
