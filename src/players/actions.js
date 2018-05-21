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

            const _calculatePlayerAge = (player) => {
                let now = new Date();
                let birthday = new Date(player.dateOfBirth);
                let diff = now - birthday;
                player.age = Math.floor(diff / 31557600000).toString();
                return player;
            };

            let players = response.data.map(_calculatePlayerAge);

            dispatch(loadPlayersSuccess(players));
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
        if (_.isEmpty(filter)) {
            debugger;
            dispatch(loadPlayers());
        } else {
            let filteredPlayers = _.filter(state.players, filter);
            debugger;
            dispatch(filterPlayersSuccess(filteredPlayers));
        }

    };
}
