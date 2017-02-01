import * as types from '../constants/actionTypes';

const initState = {
    isFetchingPrefs: true,
    query: '',
    upreferencias: [],
    upreferenciasId: []
}

const preferences = (state = initState, action) => {
    switch (action.type) {
        case types.REQUEST_PREFS:
            // console.info('reducer REQUEST_CONTACTS', state, action);
            return Object.assign({}, state, {
                isFetchingPrefs: true
            });

        case types.RECEIVE_PREFS:
            //console.info('reducer RECEIVE_PREFS', state, action);
            //console.log("P3.RED.PREFS PreferÊncias Fetched!!", action);
            return Object.assign({}, state, {
                isFetchingPrefs: false,
                upreferencias: (action.items) ? action.items : ["SICHD","SICRHD","SPTV"],
                upreferenciasId: (action.itemsId) ? action.itemsId : [1, 2, 3]
            });

        default:
            // console.info('reducer DEFAULT', state);
            return state;
    }
};

export default preferences;
