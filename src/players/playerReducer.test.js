import expect from 'expect';
import playerReducer from './playerReducer';
import * as actions from './actions';

describe('Player Reducer', () => {
    it('should populate players when passed LOAD_PLAYERS_SUCCESS', () => {
        // arrange
        const initialState = [
            {players: []}
        ];

        const playersWithAge = [
            {
                "age": "25",
                "contractUntil": "2022-06-30",
                "dateOfBirth": "1993-05-13",
                "jerseyNumber": 9,
                "name": "Romelu Lukaku",
                "nationality": "Belgium",
                "position": "Centre-Forward"
            },
            {
                "age": "27",
                "contractUntil": "2019-06-30",
                "dateOfBirth": "1990-11-07",
                "jerseyNumber": 1,
                "name": "David de Gea",
                "nationality": "Spain",
                "position": "Keeper"
            },
            {
                "age": "31",
                "contractUntil": "2021-06-30",
                "dateOfBirth": "1987-02-22",
                "jerseyNumber": 20,
                "name": "Sergio Romero",
                "nationality": "Argentina",
                "position": "Keeper"
            }];

        const action = actions.loadPlayersSuccess(playersWithAge);

        // act
        const newState = playerReducer(initialState, action);

        // assert
        expect(newState.length).toEqual(3);
    });
});
