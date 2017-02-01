import * as types from '../constants/actionTypes';

const initState = {
    isFetching: true,
    query: '',
    tcanais: []
}

const channels = (state = initState, action) => {
    switch (action.type) {
        case types.REQUEST_CHANNELS:
            //console.info('reducer REQUEST_CHANNELS', state, action);
            return Object.assign({}, state, {
                isFetching: true
            });
        case types.RECEIVE_CHANNELS:
            console.info('reducer RECEIVE_CHANNELS', state, action);
            return Object.assign({}, state, {
                isFetching: false,
                tcanais: action.items.value
            });
        default:
            // console.info('reducer DEFAULT', state);
            return state;
    }
};

export default channels;
