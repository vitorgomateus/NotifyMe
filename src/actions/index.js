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
    //console.info('ACTION receivePreferences', _.map(json, 'programa_id'));
    var json2 = _.map(json, 'programa_id');
    // var json3 = JSON.parse(window.localStorage.getItem("userPrefsId"));

    return {
        type: types.RECEIVE_PREFS,
        items: json2
    }
}

export function requestEditPref() {
    console.log('1.2.Ac.Re.Pf.-');
    return {
        type: types.REQUEST_EDIT_PREF
    }
}


export function receivePostPref(json, datu) {
    console.log('2.Ac.Po.Pf. wich:', datu);
    return {
        type: types.RECEIVE_POST_PREF,
        items: json,
        dito: datu
    }
}

export function receiveDeletePref(json, dato) {
    console.log('2.Ac.Dl.Pf. wich:', dato);

    return {
        type: types.RECEIVE_DELETE_PREF,
        items: json,
        dito: dato
    }
}


//      --------------------------------------------------------------------------------------------------------        [ THUNKS ]

//      --------------------------------------------    [   UPDATING    ]   --------------------------------------------


//      ---------------------------------------------------------------------------------------------------------- PREFS
// enviar uma pref do util para a API
export function postPref(data) {
    return function(dispatch) {
        dispatch(requestEditPref());

        console.log("1.8.Th.Po.Pf. wihc:", data);

        var FormData = require('form-data');
        var form = new FormData();
        form.append('id_programa', data);

        return fetch(`http://samuelbf94.ddns.net/api/regpref`, {
            method: 'POST',
            body: form
        })
            .then(
                response => {
                    console.info("1.9.Th.Po.Pf.-");
                    dispatch(receivePostPref(response, data))
                }
            );
    }
}

export function deletePref( data) {
    return function(dispatch) {
        dispatch(requestEditPref());

        console.log("1.8.Th.Dl.Pf. wich:", data);

        return fetch(`http://samuelbf94.ddns.net/api/delpref/${data}`, {
            method: 'DELETE'
        })
            .then(response => {
                console.info("1.9.Th.Dl.Pf.-");
                dispatch(receiveDeletePref(response, data))
            });
    }
}

//      --------------------------------------------    [   FETCHING    ]   --------------------------------------------

// o único que funciona     ----------------------------------------------------------------------------------- CHANNELS
export function fetchChannels() {
    return function(dispatch) {
        dispatch(requestChannels());

        return fetch(`http://services.online.meo.pt/OTT/2013/11/catalog/CommercialOffers('21600585')/LiveChannels?$filter=IsAdultContent%20eq%20false`)
            .then(response => response.json())
            .then(json => dispatch(receiveChannels(json)));
    }
}

//      ---------------------------------------------------------------------------------------------------------- PREFS
export function fetchPrefs() {
    return function(dispatch) {
        dispatch(requestPreferences());

        return fetch(`http://samuelbf94.ddns.net/api/getpref`)
            .then(response => response.json())
            .then(json => dispatch(receivePreferences(json)));
    }
}

//      ------------------------------------------------------------------------------------------------------- PROGRAMS
export function fetchPrograms(progString, quantos, vur) {
    return function(dispatch) {
        dispatch(requestPrograms(quantos));

        //console.log("-----RED FPROG tString:", progString);
        return fetch(progString)
            .then(response => response.json())
            .then(json => dispatch(receivePrograms(json, vur)));
    }
}

