import {createSelector} from 'reselect';

const getPlayers = (state) => state.players;

const _calculateAge = (player) => {
    let now = new Date();
    let birthday = new Date(player.dateOfBirth);
    let diff = now - birthday;
    player.age = Math.floor(diff / 31557600000).toString();
    return player;
};

export const getPlayersWithAge = createSelector(
    getPlayers,
    (players) => {
        return players.map(_calculateAge)
    }
);

const _getPositions = () => {
    return [
        "Centre-Forward",
        "Keeper",
        "Centre-Back",
        "Left-Back",
        "Right-Back",
        "Defensive Midfield",
        "Central Midfield",
        "Left Midfield",
        "Attacking Midfield",
        "Left Wing"
    ]
};

export const getPositionsFormattedForDropdown = createSelector(
    _getPositions, (positions) => positions.map(position => {
        return {
            value: position,
            text: position
        }
    })
);