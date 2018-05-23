import * as actions from './actions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const players = [
    {
        "contractUntil": "2022-06-30",
        "dateOfBirth": "1993-05-13",
        "jerseyNumber": 9,
        "name": "Romelu Lukaku",
        "nationality": "Belgium",
        "position": "Centre-Forward"
    },
    {
        "contractUntil": "2019-06-30",
        "dateOfBirth": "1990-11-07",
        "jerseyNumber": 1,
        "name": "David de Gea",
        "nationality": "Spain",
        "position": "Keeper"
    },
    {
        "contractUntil": "2021-06-30",
        "dateOfBirth": "1987-02-22",
        "jerseyNumber": 20,
        "name": "Sergio Romero",
        "nationality": "Argentina",
        "position": "Keeper"
    }];

describe('Players Sync Actions', () => {
    describe('loadPlayersSuccess', () => {
        it('should create a LOAD_PLAYERS_SUCCESS action', () => {
            // arrange
            const expectedAction = {
                type: types.LOAD_PLAYERS_SUCCESS,
                players: players
            };

            // act
            const action = actions.loadPlayersSuccess(players);

            // assert
            expect(action).toEqual(expectedAction);
        });
    });
});

describe('Players Async Actions', () => {
    const host = 'https://football-players-b31f2.firebaseio.com';
    axios.defaults.host = host;
    axios.defaults.adapter = httpAdapter;

    afterEach(() => {
        nock.cleanAll();
    });

    it('should create LOAD_PLAYERS_SUCCESS when loading players', (done) => {
        nock(host)
            .get('/players.json')
            .reply(200, players);

        const expectedActions = [
            {
                type: types.LOAD_PLAYERS_SUCCESS, players: players
            }
        ];

        const store = mockStore({players: []}, expectedActions);
        store.dispatch(actions.loadPlayers())
            .then(() => {
                const actions = store.getActions();
                expect(actions[0].type).toEqual(types.LOAD_PLAYERS_SUCCESS);
                expect(actions[0].players[0]).toHaveProperty('age');
                done();
            });
    });

    it('should create LOAD_PLAYERS_SUCCESS when loading filtered players', (done) => {
        nock(host)
            .get('/players.json')
            .reply(200, players);

        const expectedActions = [
            {
                type: types.LOAD_PLAYERS_SUCCESS, players: players
            }
        ];

        const store = mockStore({players: []}, expectedActions);
        const filters = {name: 'ro', position: "Keeper"};

        store.dispatch(actions.loadPlayers(filters))
            .then(() => {
                const actions = store.getActions();
                expect(actions[0].type).toEqual(types.LOAD_PLAYERS_SUCCESS);
                expect(actions[0].players.length).toBe(1);
                done();
            });
    });
});