/**
 * Created by VitorMaGo on 12/01/2017.
 */
import React, { Component } from 'react';
import ItemList from './listcomp/ItemList';
import $ from 'jquery'
import '../css/prefs.css';/*
 import { Link } from 'react-router';*/

/*var CHANNELS = [
    {id: '0', progrTitle: 'RTP', so:'02', ep:'03', canal:'FOX', airTime: '23:40', src:'brkbad.png'},
    {id: '1', progrTitle: 'TVI', so:'02', ep:'04', canal:'FOX', airTime: '01:00', src:'brkbad.png'},
    {id: '2', progrTitle: 'National Geographic', so:'04', ep:'07', canal:'SIC', airTime: '22:40', src:'theVoice.png'},
    {id: '3', progrTitle: 'SIC', so:'01', ep:'02', canal:'Nat-Geo', airTime: '21:30', src:'Amormaior.png'},
    {id: '4', progrTitle: 'Sci-fy', so:'2016', ep:'15/11', canal:'TVI', airTime: '20:00', src:'Tvi24logo.png'},
    {id: '5', progrTitle: 'FOX Comedy', so:'2016', ep:'12/12', canal:'SIC', airTime: '20:00', src:'sicLogo.png'}
];*/

class App extends Component {


    constructor(props) {
        super(props);

        this.state = {channel: []};
    }

    componentDidMount() {
        this.UserList();
    }

    UserList() {
        return $.getJSON('http://services.sapo.pt/EPG/GetChannelListjson')
            .then((data) => {
                this.setState({ channel: data.GetChannelListResponse.GetChannelListResult.Channel });
            });
    }

    render() {
        const channels = this.state.channel.map((item, i) => {
            return <div>
                <h1>{item.Name}</h1>
                <span>{item.Providers.Provider.Name}</span>
            </div>
        });

        return <div id="layout-content" className="layout-content-wrapper">
            <div className="panel-list">{ channels }</div>
        </div>
    }

    /*render() {

        return (
            <div className="prefs">
                <form action="#" method="post">
                    <ItemList products={CHANNELS} />
                </form>
            </div>
        );
    }*/
}

export default App;
