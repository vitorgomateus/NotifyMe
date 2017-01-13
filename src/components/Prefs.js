/**
 * Created by VitorMaGo on 12/01/2017.
 */
import React, { Component } from 'react';
import ItemList from './listcomp/ItemList'
import '../css/prefs.css';/*
 import { Link } from 'react-router';*/

import Header from './Header';

var CHANNELS = [
    {id: '0', progrTitle: 'RTP', so:'02', ep:'03', canal:'FOX', airTime: '23:40', src:'brkbad.png'},
    {id: '1', progrTitle: 'TVI', so:'02', ep:'04', canal:'FOX', airTime: '01:00', src:'brkbad.png'},
    {id: '2', progrTitle: 'National Geographic', so:'04', ep:'07', canal:'SIC', airTime: '22:40', src:'theVoice.png'},
    {id: '3', progrTitle: 'SIC', so:'01', ep:'02', canal:'Nat-Geo', airTime: '21:30', src:'Amormaior.png'},
    {id: '4', progrTitle: 'Sci-fy', so:'2016', ep:'15/11', canal:'TVI', airTime: '20:00', src:'Tvi24logo.png'},
    {id: '5', progrTitle: 'FOX Comedy', so:'2016', ep:'12/12', canal:'SIC', airTime: '20:00', src:'sicLogo.png'}
];

class App extends Component {

    render() {

        return (
            <div className="prefs">
                <form action="#" method="post">
                    <ItemList products={CHANNELS} />
                </form>
            </div>
        );
    }
}

export default App;
