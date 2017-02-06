import React from 'react';
import {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import List from '../components/List';

import {fetchPrograms, resetPrograms} from '../actions';

class ListFunction extends Component {


    constructor(props) {
        super(props);
        this.ProgrList = this.ProgrList.bind(this);
    }

    componentDidMount() {
        this.ProgrList();
    }
    componentDidUpdate(){
        const {dispatch} = this.props;
        dispatch(resetPrograms());
    }
    ProgrList(){

        const {dispatch} = this.props;

        var n = new Date();

        var D = n.getTime() - (0.2 * 60 * 60 * 1000);       //desde
        var d = new Date(D);

        var dM = d.getMonth() + 1;
        dM = (dM >= 10) ? dM : (`0` + dM);
        var dD = d.getDate();
        dD = (dD >= 10) ? dD : (`0` + dD);
        var dHo = d.getHours();
        dHo = (dHo >= 10) ? dHo : (`0` + dHo);
        var dMi = d.getMinutes();
        dMi = (dMi >= 10) ? dMi : (`0` + dMi);
        var dSe = d.getSeconds();
        dSe = (dSe >= 10) ? dSe : (`0` + dSe);

        var intervaloDatas = `%27%20and%20StartDate%20ge%20datetime%27` + d.getFullYear() + `-` + dM + `-` + dD + `T` + dHo + `:` + dMi + `:` + dSe + `%27&$format=JSON`;


        var prefsReady = !this.props.preferences.isFetchingPrefs;
        if(prefsReady) {

            var moreprefers = this.props.preferences.upreferencias;

            var startString = `http://services.online.meo.pt/Data/2013/11/programs/EpgLiveChannelPrograms?$top=4&$orderby=StartDate%20asc&$filter=CallLetter%20eq%20%27`;
            var itemsProcessed = 0;
            moreprefers.forEach(function (prefCallLetter, j) {
                var totalProgrString = ``+startString +``+prefCallLetter+``+ intervaloDatas+``;

                itemsProcessed++;
                if(itemsProcessed === moreprefers.length) {
                    dispatch(resetPrograms());
                }
                dispatch(fetchPrograms(totalProgrString, moreprefers.length, j));
            });
        }

    }

    render() {
        var userNome = window.localStorage.getItem("userName");

        var prefsReady = !this.props.preferences.isFetchingPrefs;
        var quntPrefs = this.props.preferences.upreferencias.length;

        if (prefsReady) {
            if(quntPrefs===0){
                return (
                    <div className="container">
                        <h2 className="lista-title">Defina as suas preferências para ver uma lista de programas</h2>
                    </div>
                );
            }else {
                return (
                    <div className="container">
                        <h2 className="lista-title">Olá {userNome}<br/>a sua programação de agora</h2>
                        <List />
                    </div>
                );
            }
        } else {
            return (
                <div className="progrsLoading">
                    <h2 className="lista-title">Loading Programs</h2>
                </div>
            );
        }
    }
}





ListFunction.propTypes = {
    preferences: PropTypes.object
}

const mapStateToProps = (state, ownProps) => {
    return {preferences: state.preferences};
}

export default connect(mapStateToProps)(ListFunction);
