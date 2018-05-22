import {combineReducers} from 'redux';
import players from './players/playerReducer';

const rootReducer = combineReducers({
    players
});

export default rootReducer;
