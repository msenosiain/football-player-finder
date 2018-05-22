import React from 'react';
import {mount, shallow} from 'enzyme';
import {PlayersPage} from './PlayersPage';
import _ from 'lodash';

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
    }
];

describe('Players Page', () => {

    function setup(players) {
        const props = {
            players: players,
            positions: [],
            filters: {name: '', position: '', age: ''},
            actions: {
                loadPlayers: () => {
                    return Promise.resolve(players);
                }
            }

        };
        return mount(<PlayersPage {...props}/>)
    }


    it('should be true', function () {
        expect(true).toBe(true);
    });

    it('renders without crashing', () => {
        shallow(<PlayersPage/>);
    });

    it('renders has submit button', () => {
        const wrapper = setup(players);
        const searchButton = wrapper.find('.btn');
        expect(searchButton.prop('type')).toBe('submit');
    });

    it('renders players rows', () => {
        const wrapper = setup(players);
        const searchButton = wrapper.find('.btn');
        searchButton.simulate('click');
        expect(wrapper.find('tbody tr').length).toBe(3);
    });

    it('renders players rows filtered', () => {
        const wrapper = setup(_.filter(players, (player) => {
            return player.name.toLowerCase().indexOf('ro') > -1;
        }));
        const searchButton = wrapper.find('.btn');
        searchButton.simulate('click');
        expect(wrapper.find('tbody tr').length).toBe(2);
    });
});