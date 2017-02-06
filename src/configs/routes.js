import React from 'react';
import {Route, IndexRoute} from 'react-router';

// COMPONENTS
import App from '../containers/App';
import Login from '../containers/Login';
import List from '../containers/ListFunction';
import Epp from '../containers/Epp';
import Prefs from '../containers/Prefs';

import Callback from '../containers/Callback';


export default (
    <Route path="/" component={App}>
        <IndexRoute component={Login}/>,{/*
        <Route path="/login" component={Login} />*/}
        <Route path="/home" component={List} />
        <Route path="/epp/:id" component={Epp} />
        <Route path="/prefs" component={Prefs} />
        <Route path="/callback" component={Callback} />
    </Route>
);

