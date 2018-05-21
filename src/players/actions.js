import * as types from './actionTypes';
import PlayerApi from '../api/PlayerApi';
import {beginAjaxCall, ajaxCallError} from "../common/ajaxStatusActions";
import _ from 'lodash';

const _calculateAge = (player) => {
    let now = new Date();
    let birthday = new Date(player.dateOfBirth);
    let diff = now - birthday;
    player.age = Math.floor(diff / 31557600000).toString();
    return player;
};

// Player Actions

export function loadPlayersSuccess(players) {
    return {type: types.LOAD_PLAYERS_SUCCESS, players};
}

export function loadPlayers(filters) {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return PlayerApi.getAllPlayers().then(response => {
            const filter = _.pickBy(filters, prop => {
                return !!prop;
            });
            let players = response.data.map(_calculateAge);

            if (_.isEmpty(filter)) {
                dispatch(loadPlayersSuccess(players));
            } else {
                dispatch(loadPlayersSuccess(_.filter(players, filter)));
            }
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}
