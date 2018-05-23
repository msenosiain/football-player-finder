import expect from 'expect';
import {getPositionsFormattedForDropdown} from "./selectors";

describe('Position Selectors', () => {
    describe('getPositionsFormattedForDropdown', () => {
        it('should return positions data formatted for use in a dropdown', () => {
            const expected = [
                {text: "Centre-Forward", value: "Centre-Forward"},
                {text: "Keeper", value: "Keeper"},
                {text: "Centre-Back", value: "Centre-Back"},
                {text: "Left-Back", value: "Left-Back"},
                {text: "Right-Back", value: "Right-Back"},
                {text: "Defensive Midfield", value: "Defensive Midfield"},
                {text: "Central Midfield", value: "Central Midfield"},
                {text: "Left Midfield", value: "Left Midfield"},
                {text: "Attacking Midfield", value: "Attacking Midfield"},
                {text: "Left Wing", value: "Left Wing"}
            ];

            expect(getPositionsFormattedForDropdown()).toEqual(expected);
        });
    });
});
