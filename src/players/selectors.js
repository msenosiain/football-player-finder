import {createSelector} from 'reselect';

const getPositions = () => {
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
    getPositions, (positions) => positions.map(position => {
        return {
            value: position,
            text: position
        }
    })
);