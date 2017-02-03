import * as types from '../constants/actionTypes';
import Constants from '../constants/constNum';

const numProgramas = Constants.numProg;

const initState = {
    isFetching: true,
    query: '',
    counter: '',
    number: 0,
    reset: false,
    fprogramas: []
}

const programs = (state = initState, action) => {

    switch (action.type) {

        case types.RESET_PROGRAMS:
            var emptyArray = [];
            var objecta=  Object.assign({}, state, {
                reset: true,
                counter: 0,
                fprogramas: emptyArray
            });
            //console.log("RED RES PROG", objecta);
            return objecta;


        case types.REQUEST_PROGRAMS:
            // console.info('reducer REQUEST_CONTACTS', state, action);
            return Object.assign({}, state, {
                isFetching: true,
                number: action.number
            });


        case types.RECEIVE_PROGRAMS:
            // console.info('reducer RECEIVE_CONTACTS', state, action);


            var doingFetch = state.isFetching;
            var contador = state.counter;
            var numero = state.number;
            var reseter = state.reset;
            var t = state.fprogramas;

            var iteracao = action.items.iter;

            //console.log("M.RED.PROG temos:", t.length, "fetch:"+doingFetch, "puxados:"+contador, "Canais"+numero, "iteracao"+iteracao);

            //      ------------------------------------------------------------------------------- started a new fetch
            if(iteracao === 0){
                doingFetch = true;
                contador = 0;
                reseter = false;
                t = [];
            }
            //console.log("M.RED.PROG isto devia...:", t.length, "fetch:"+doingFetch, "puxados:"+contador, "Canais"+numero, "iteracao"+iteracao);


            //      ------------------------------------------------------------------ get the programs from first fetch
            var d = action.items.d;
            //      ---------------------------------------------------------------- push them into the collective array
            d.forEach(function(palhaco){
                t.push(palhaco);
            });


            //      -------------------------------------------------------------- count another iteration of this fetch
            contador++;
            var p = t;
            //      --------------------------------------- if this is last iteration, stop fetching, and sort and slice, reset counter
            if(contador===numero) {
                doingFetch = false;
                contador = 0;
                t.sort(function(a, b) {
                    // --- "/Date(1485806400000)/"
                    var w = a.StartDate.slice(6,19);
                    var vv = b.StartDate.slice(6,19);
                    return parseFloat(w) - parseFloat(vv);
                });
                p=t.slice(0,numProgramas);
                t = [];
            }
            //console.log("M.RED.PROG e agora temos:", p.length, "fetch:"+doingFetch, "puxados:"+contador, "Canais:"+numero, "iteracao"+iteracao);


            return Object.assign({}, state, {
                isFetching: doingFetch,
                fprogramas: p,
                counter: contador,
                reset: reseter
            });


        default:
            // console.info('reducer DEFAULT', state);
            return state;
    }
};

export default programs;
