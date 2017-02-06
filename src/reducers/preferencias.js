import * as types from '../constants/actionTypes';
import _ from 'lodash';

const initState = {
    isFetchingPrefs: true,
    edited: true,
    waitingdone: true,
    lastedit: "noneEdit",
    query: '',
    upreferencias: []
};

const preferences = (state = initState, action) => {
    switch (action.type) {
        case types.REQUEST_PREFS:
            // console.info('reducer REQUEST_CONTACTS', state, action);
            return Object.assign({}, state, {
                isFetchingPrefs: true
            });

        case types.RECEIVE_PREFS:
            console.info('4.Rd.Re.Pf', action.items);
            //console.log("P3.RED.PREFS PreferÊncias Fetched!!", action);
            // ,upreferenciasId: (action.items) ? action.itemsId : jar2
            var jar1 = ["SICHD","SICRHD","SPTV"];
            //var jar2 = [1, 2, 3];
            return Object.assign({}, state, {
                isFetchingPrefs: false,
                upreferencias: (action.items) ? action.items : jar1
            });



        //--------------------------------------------------------------------------------------------------------------

        case types.REQUEST_EDIT_PREF:
            // console.info('reducer REQUEST_CONTACTS', state, action);
            console.info("1.5.Rd.Rq.Edit-");
            return Object.assign({}, state, {
                waitingdone: false
            });


        //--------------------------------------------------------------------------------------------------------------

        case types.RECEIVE_POST_PREF:
            var pArr = state.upreferencias;

            var statusPosted = (action.items.status === 200);
            // statusPosted = false;

            var novoPArr = pArr;
            novoPArr.push(action.dito);
            //novoPArr = (statusPosted) ? novoPArr : pArr;
            //The line above and the one below do the same thing and will redo said action. So one should not exist.
            if(!statusPosted){_.pull(novoPArr, action.dito)}

            var scorePos = "Post :" + action.dito;

            console.log("action status:", action.items.status);
            console.info("3.Re.Po.Pf. was:", pArr, "posted?", statusPosted, "wich:", action.dito, "will be:", novoPArr);
            return Object.assign({}, state, {
                waitingdone: true,
                edited: statusPosted,
                lastedit: scorePos,
                upreferencias: novoPArr
            });


        //--------------------------------------------------------------------------------------------------------------

        case types.RECEIVE_DELETE_PREF:
            var dArr = state.upreferencias;

            var statusDeleted = (action.items.status === 200);

            var novoDArr = dArr;
            _.pull(novoDArr, action.dito);
            //novoDArr = (statusDeleted) ? novoDArr : dArr;
            //The line above and the one below do the same thing and will redo said action. So one should not exist.
            if(!statusDeleted){novoDArr.push(action.dito)}

            var scoreDel = "Del: " + action.dito;

            console.log("action status:", action.items.status);
            console.info("3.Re.Dl.Pf. was:", dArr, "deleted?", statusDeleted, "wich:", action.dito, "will be:", novoDArr);

            // HACKING
            /*statusDeleted = false;
            novoDArr = dArr;*/
            return Object.assign({}, state, {
                waitingdone: true,
                edited: statusDeleted,
                lastedit: scoreDel,
                upreferencias: novoDArr
            });

        default:
            // console.info('reducer DEFAULT', state);
            return state;
    }
};

export default preferences;
