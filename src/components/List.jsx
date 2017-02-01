import React from 'react';
import {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import ListComponent from './ListComponent';
import Splash from './Splash';

class List extends Component {

    /*componentWillReceiveProps(){
        this.render();
    }*/

    render() {

        const isFetching = this.props.progFetcher;
        console.log('LIST RNDR state',this.props);



        //console.log('LIST RENDER props', this.props);
        if (!isFetching) {
            //console.log('LIST RENDER propsYAYAYAYAYAYA', this.props);
            return (
                <div className="mainContainer">
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
    prefFetcher: PropTypes.bool
}

const mapStateToProps = (state, ownProps) => {
    //console.info('container List mapStateToProps state', state);
    //console.log('LIST-STP props', state, ownProps);
    return {programs: state.programs.fprogramas, progFetcher: state.programs.isFetching, preferences: state.preferences.upreferencias, prefFetcher: state.preferences.isFetchingPrefs};
}

export default connect(mapStateToProps)(List);
