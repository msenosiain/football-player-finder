import * as types from './actionTypes';
import PlayerApi from '../api/PlayerApi';
import {beginAjaxCall, ajaxCallError} from "../common/ajaxStatusActions";
import _ from 'lodash';

// Player Actions

export function loadPlayersSuccess(players) {
    return {type: types.LOAD_PLAYERS_SUCCESS, players};
}

export function loadPlayers() {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return PlayerApi.getAllPlayers().then(response => {
            dispatch(loadPlayersSuccess(response.data));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}

export function filterPlayersSuccess(players) {
    return {type: types.FILTER_PLAYERS_SUCCESS, players}
}

export function filterPlayers(filters) {
    return function (dispatch, getState) {
        const state = getState();
        const filter = _.pickBy(filters, prop => {
            return !!prop;
        });
        if (_.isEmpty(state.players) || _.isEmpty(filter)) {
            dispatch(loadPlayers());
        } else {
            let filteredPlayers = _.filter(state.players, filter);
            dispatch(filterPlayersSuccess(filteredPlayers));
        }

    };
}
