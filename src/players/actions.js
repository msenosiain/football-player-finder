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
            const criteria = _.pickBy(filters, prop => {
                return !!prop;
            });
            let players = response.data.map(_calculateAge);

            if (_.isEmpty(criteria)) {
                dispatch(loadPlayersSuccess(players));
            } else {
                dispatch(loadPlayersSuccess(_.filter(players, player => {
                    let ret = [];
                    _.each(criteria, (value, key) => {
                        if (key === 'name') {
                            ret.push(player[key].indexOf(value) > -1);
                        } else {
                            ret.push(player[key] === value);
                        }
                    });

                    return ret.every(val => {
                        return val
                    });
                })));
            }
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}
