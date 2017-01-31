import React from 'react';
import {Route, IndexRoute} from 'react-router';

// COMPONENTS
import App from '../containers/App';
import List from '../containers/ListFunction';
import Login from '../containers/Login';
import Prefs from '../containers/Prefs';

import Callback from '../containers/Callback';


export default (
    <Route path="/" component={App}>
        <IndexRoute component={Login}/>,
        <Route path="/home" component={List} />
        <Route path="/prefs" component={Prefs} />
        <Route path="/callback" component={Callback} />
    </Route>
);

