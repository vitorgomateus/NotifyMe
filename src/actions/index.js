import fetch from 'isomorphic-fetch';
import * as types from '../constants/actionTypes';


//      ------------------------------------------------------------------------------------------------------- CHANNELS
export function requestChannels() {
    // console.info('action requestContacts');
    return {
        type: types.REQUEST_CHANNELS
    }
}

export function receiveChannels(json) {
    // console.info('action receiveContacts', json);
    return {
        type: types.RECEIVE_CHANNELS,
        items: json
    }
}

//      ---------------------------------------------------------------------------------------------------------- PREFS
export function requestPreferences() {
    // console.info('action requestContactById');
    return {
        type: types.REQUEST_PREFS
    }
}

export function receivePreferences(json) {
    //console.info('action receivePreferences', json);
    return {
        type: types.RECEIVE_PREFS,
        items: json
    }
}

//      ------------------------------------------------------------------------------------------------------- PROGRAMS
export function resetPrograms(num) {
    // console.info('action requestContactById');
    return {
        type: types.RESET_PROGRAMS,
        number: num
    }
}
export function requestPrograms() {
    // console.info('action requestContactById');
    return {
        type: types.REQUEST_PROGRAMS
    }
}

export function receivePrograms(json) {
    // console.info('ACTION receiveContactById', json);
    return {
        type: types.RECEIVE_PROGRAMS,
        items: json
    }
}


//      --------------------------------------------------------------------------------------------------------        [ THUNKS ]

//      --------------------------------------------    [   UPDATING    ]   --------------------------------------------


//      ---------------------------------------------------------------------------------------------------------- PREFS
// enviar uma pref do util para a API
export function postPrefLS(data) {
    return function(dispatch) {

        return fetch(`http://samuelbf94.ddns.net/api/user`, {
            method: 'POST',
            body: data
        })
            .then(response => response.json());
    }
}

// isto tem de passaer a ser method:DELETE, removePref
export function removePref(id, data) {
    console.log(id, data);

    return function(dispatch) {
        return fetch(`http://samuelbf94.ddns.net/api/user${id}`, {
                method: 'DELETE',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify(data)
            })
            .then(response => response.json());
    }
}

//      --------------------------------------------    [   FETCHING    ]   --------------------------------------------

// o único que funciona     ----------------------------------------------------------------------------------- CHANNELS
export function fetchChannels() {
    return function(dispatch) {
        dispatch(requestChannels());

        // http://services.online.meo.pt/OTT/2013/11/catalog/CommercialOffers('21600585')/LiveChannels?$filter=IsAdultContent%20eq%20false
        // http://services.sapo.pt/EPG/GetChannelListjson
        return fetch(`http://services.online.meo.pt/OTT/2013/11/catalog/CommercialOffers('21600585')/LiveChannels?$filter=IsAdultContent%20eq%20false`)
            .then(response => response.json())
            .then(json => dispatch(receiveChannels(json)));
    }
}

//      ---------------------------------------------------------------------------------------------------------- PREFS
export function fetchPrefs() {
    return function(dispatch) {
        dispatch(requestPreferences());

        var json2 = JSON.parse(window.localStorage.getItem("userPrefs"));
        //console.log("fetchPrefs json2", json2);
        return dispatch(receivePreferences(json2));
        /*return fetch(`http://samuelbf94.ddns.net/api/user`)
            .then(response => response.json();)
            .then(json => dispatch(receivePreferences(json)));*/
    }
}

//      ------------------------------------------------------------------------------------------------------- PROGRAMS
export function fetchPrograms(progString) {
    return function(dispatch) {
        dispatch(requestPrograms());

        // o url pode estar todo na string
        //var startString= `http://services.online.meo.pt/Data/2013/11/programs/EpgLiveChannelPrograms?$top=4&$orderby=StartDate%20asc&$filter=CallLetter%20eq%20%27`;
        //var totalProgrString = startString + progString;

        //console.log("-----RED FPROG tString:", progString);
        return fetch(progString)
            .then(response => response.json())
            .then(json => dispatch(receivePrograms(json)));
    }
}

