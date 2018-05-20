import {combineReducers} from 'redux';
import players from './players/playerReducer';
import ajaxCallsInProgress from './common/ajaxStatusReducer';

const rootReducer = combineReducers({
    players,
    ajaxCallsInProgress
});

export default rootReducer;
