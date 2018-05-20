import _ from 'lodash';
import {createSelector} from 'reselect';

const getPlayers = (state) => state.players;

export const getPositionsFormattedForDropdown = createSelector(
    getPlayers,
    (players) => _.map(_.uniq(_.map(players, 'position')), position => {
        return {}
    })
);