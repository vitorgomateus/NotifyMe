import {combineReducers} from 'redux';
import programs from './programas';
import channels from './canais';
import preferences from './preferencias';

const reducers = combineReducers({
    programs, channels, preferences
});

export default reducers;
