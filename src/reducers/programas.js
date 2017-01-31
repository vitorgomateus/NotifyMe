import * as types from '../constants/actionTypes';

const initState = {
    isFetching: true,
    query: '',
    counter: '',
    number: 0,
    fprogramas: []
}

const programs = (state = initState, action) => {
    switch (action.type) {

        case types.RESET_PROGRAMS:
            return Object.assign({}, state, {
                number: action.number
            });

        case types.REQUEST_PROGRAMS:
            // console.info('reducer REQUEST_CONTACTS', state, action);
            return Object.assign({}, state, {
                isFetching: true
            });
        case types.RECEIVE_PROGRAMS:
            // console.info('reducer RECEIVE_CONTACTS', state, action);



            var contador = state.counter;


            var t = state.fprogramas;
            var doingFetch = true;
            var numero = state.number;

            console.log("M.RED.PROG temos:", t.length, doingFetch, contador, "numero"+numero);

            if(contador===numero){
                t = [];
                numero = 0;
            }




            var d = action.items.d;
            d.forEach(function(palhaco){
                t.push(palhaco);
            });
            t.sort(function(a, b) {
                //"/Date(1485806400000)/"
                var w = a.StartDate.slice(6,19);
                var vv = b.StartDate.slice(6,19);
                return parseFloat(w) - parseFloat(vv);
            });

            contador++;
            var p = t;
            if(contador===numero) {
                doingFetch = false;
                contador = 0;
                p=t.slice(0,7);// ------------------------------------------------------------------ DEV DO
            }
            console.log("M.RED.PROG e agora temos:", t.length, "fetch:"+doingFetch, "puxados:"+contador, "Canais:"+numero);


            return Object.assign({}, state, {
                isFetching: doingFetch,
                fprogramas: p,
                counter: contador,
                number: numero
            });


        default:
            // console.info('reducer DEFAULT', state);
            return state;
    }
};

export default programs;
