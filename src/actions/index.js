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

//      ------------------------------------------------------------------------------------------------------- PROGRAMS
export function resetPrograms(num) {
    // console.info('action requestContactById');
    return {
        type: types.RESET_PROGRAMS,
        reset: true
    }
}
export function requestPrograms(quantos) {
    // console.info('action requestContactById');
    return {
        type: types.REQUEST_PROGRAMS,
        number: quantos
    }
}

export function receivePrograms(json, vir) {
    //console.info('ACTION receivePrograms', json, vir);
    return {
        type: types.RECEIVE_PROGRAMS,
        items: json,
        iter: vir
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
    //console.info('ACTION receivePreferences', json);
    var _ = require('lodash');
    console.info('ACTION receivePreferences', _.map(json, 'programa_id'));
    var json2 = _.map(json, 'programa_id');
    //var json2 = JSON.parse(window.localStorage.getItem("userPrefs"));
    var json3 = JSON.parse(window.localStorage.getItem("userPrefsId"));
    return {
        type: types.RECEIVE_PREFS,
        items: json2,
        itemsId: json3
    }
}

export function receivePostPref(json) {
    console.info('ACTION receivePostPrefs', json);
    return {
        type: types.RECEIVE_POST_PREF,
        items: json
    }
}

export function receiveDeletePref(json) {
    console.info('ACTION receiveDeletePrefs', json);

    //      ------------------------------------------------------------------------------------------ CHECK IF OK
    //      ------------------------------------------------------------------------------------------ CHECK IF OK
    //      ------------------------------------------------------------------------------------------ CHECK IF OK
    //      ------------------------------------------------------------------------------------------ CHECK IF OK
    //      ------------------------------------------------------------------------------------------ CHECK IF OK
    //      ------------------------------------------------------------------------------------------ CHECK IF OK
    //      ------------------------------------------------------------------------------------------ CHECK IF OK
    //      ------------------------------------------------------------------------------------------ CHECK IF OK
    //      ------------------------------------------------------------------------------------------ CHECK IF OK

    return {
        type: types.RECEIVE_DELETE_PREF,
        items: json
    }
}


//      --------------------------------------------------------------------------------------------------------        [ THUNKS ]

//      --------------------------------------------    [   UPDATING    ]   --------------------------------------------


//      ---------------------------------------------------------------------------------------------------------- PREFS
// enviar uma pref do util para a API
export function postPref(data) {
    return function(dispatch) {

        console.log("T.ACTION PostP", data);
        //data = "id_programa=KSICHD";



        var FormData = require('form-data');
        var form = new FormData();
        form.append('id_programa', data);



        return fetch(`http://samuelbf94.ddns.net/api/regpref`, {
            method: 'POST',
            body: form
        })
            .then(response => dispatch(receivePostPref(response)));/*
         .then(response => response.json())
         .then(json => dispatch(receivePostPref(json)));*/
    }
}

export function deletePref( data) {
    return function(dispatch) {

        console.log("T.ACTION DelP", data);
        //data = 'DISNY';

        /*var FormData = require('form-data');
        var form = new FormData();
        form.append('id_programa', 'ABOLA');
*/
        return fetch(`http://samuelbf94.ddns.net/api/delpref/${data}`, {
            method: 'DELETE'
        })
            .then(response => dispatch(receiveDeletePref(response)));
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

        /*
         window.localStorage.removeItem("userPrefs");
         window.localStorage.removeItem("userPrefsId");*/
        //console.log("P2.ACTION PREF", "json2", json2, "json3", json3);
        //return dispatch(receivePreferences(json2, json3));
        return fetch(`http://samuelbf94.ddns.net/api/getpref`)
            .then(response => response.json())
            .then(json => dispatch(receivePreferences(json)));
    }
}

//      ------------------------------------------------------------------------------------------------------- PROGRAMS
export function fetchPrograms(progString, quantos, vur) {
    return function(dispatch) {
        dispatch(requestPrograms(quantos));

        // o url pode estar todo na string
        //var startString= `http://services.online.meo.pt/Data/2013/11/programs/EpgLiveChannelPrograms?$top=4&$orderby=StartDate%20asc&$filter=CallLetter%20eq%20%27`;
        //var totalProgrString = startString + progString;

        //console.log("-----RED FPROG tString:", progString);
        return fetch(progString)
            .then(response => response.json())
            .then(json => dispatch(receivePrograms(json, vur)));
    }
}

