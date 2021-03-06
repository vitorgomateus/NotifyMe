import React from 'react';
import {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import ListComponent from './ListComponent';
import Splash from './Splash';

class List extends Component {


    render() {

        const isFetching = this.props.progFetcher;
        if (!isFetching) {
            return (
                <div className="col-xs-12 item-align-center npd">
                    <ListComponent items={this.props.programs}/>
                </div>
            );
        } else {
            return (
                <div className="progrsListLoading">
                    <h1>Loading List Programs</h1>
                    <Splash />

                </div>
            );
        }
    }
}





List.propTypes = {
    programs: PropTypes.array,
    progFetcher: PropTypes.bool,
    preferences: PropTypes.array,
    preferencesId: PropTypes.array,
    prefFetcher: PropTypes.bool
}

const mapStateToProps = (state, ownProps) => {
    //console.info('container List mapStateToProps state', state);
    //console.log('LIST-STP props', state, ownProps);
    return {programs: state.programs.fprogramas, progFetcher: state.programs.isFetching, preferences: state.preferences.upreferencias, preferencesId: state.preferences.upreferenciasId, prefFetcher: state.preferences.isFetchingPrefs};
}

export default connect(mapStateToProps)(List);
