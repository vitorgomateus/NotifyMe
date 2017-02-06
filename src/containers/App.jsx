import React, {Component, PropTypes} from 'react';
import { browserHistory } from 'react-router';
import {connect} from 'react-redux';
import Header from '../components/Header';

import {fetchPrefs} from '../actions';

class App extends Component {

    componentWillMount(){
        var token = window.localStorage.getItem("userToken");
        var name= window.localStorage.getItem("userName");
        console.log("APP CHECK TOKEN", name, token);
        if(!token) {
            browserHistory.push('/login');// /login
        }else{
            browserHistory.push('/home');
        }
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchPrefs());
    }

    render() {
        return(
            <div className="app-wrapper">
                <Header />
                {this.props.children}
            </div>
        );
    }
}



App.propTypes = {
    preferences: PropTypes.array,
    fetcher: PropTypes.bool
}

const mapStateToProps = (state, ownProps) => {
    return {preferences: state.preferences.upreferencias, fetcher: state.preferences.isFetchingPrefs};
}

export default connect(mapStateToProps)(App);
