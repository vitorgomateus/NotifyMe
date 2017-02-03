import * as types from '../constants/actionTypes';

const initState = {
    isFetchingPrefs: true,
    posted: false,
    deleted: false,
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
        // ,upreferenciasId: (action.items) ? action.itemsId : jar2
            var jar1 = ["SICHD","SICRHD","SPTV"];
            //var jar2 = [1, 2, 3];
            return Object.assign({}, state, {
                isFetchingPrefs: false,
                upreferencias: (action.items) ? action.items : jar1
            });

        case types.RECEIVE_POST_PREF:
            //console.info('REDU RPoPref:', state, action);
            return Object.assign({}, state, {
                posted: true
            });

        case types.RECEIVE_DELETE_PREF:
            //console.info('REDU RDePref:', state, action);
            return Object.assign({}, state, {
                deleted: true
            });

        default:
            // console.info('reducer DEFAULT', state);
            return state;
    }
};

export default preferences;
