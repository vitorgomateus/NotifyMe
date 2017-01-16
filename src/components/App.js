import React, { Component } from 'react';/*
 import { Link } from 'react-router';*/

import Header from './Header';

class App extends Component {

    constructor(){
        super();

        this.state = {
            name: "",
            email: "",
        };
    }


    render() {

        return (
            <div className="App">

                <Header />
                {this.props.children}

                {/*<div>
                 <h1>React Router Tutorial</h1>
                 <ul role="nav">
                 <li><Link to="/app">App</Link></li>
                 <li><Link to="/epp">Episode</Link></li>
                 </ul>
                 </div>
                 {this.props.children}*/}
            </div>
        );
    }
}

export default App;


