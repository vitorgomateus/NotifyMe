import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import App from './components/App';
import Epp from './components/Epp';
import Main from './components/Main';
import Splash from './components/Splash';
import Info from './components/Registo';
import Options from './components/Options';
import Prefs from './components/Prefs';

ReactDOM.render(
    (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Splash} />
            <Route path="main" component={Main}/>
            <Route path="epp/:Id" component={Epp} />
            <Route path="info" component={Info} />
            <Route path="defs" component={Options} />
            <Route path="prefs" component={Prefs} />
        </Route>


    </Router>
),
document.getElementById('container')
);

/*ReactDOM.render((
 <Router history={hashHistory}>
 <Route path="/apps" component={App}/>
 <Route path="/epp" component={Ep}/>

 </Router>
 ), document.getElementById('root'));


 */
