import React from 'react';
import {mount, shallow} from 'enzyme';
import {PlayersPage} from './PlayersPage';

const players = [
    {
        "contractUntil": "2022-06-30",
        "dateOfBirth": "1993-05-13",
        "jerseyNumber": 9,
        "name": "Romelu Lukaku",
        "nationality": "Belgium",
        "position": "Centre-Forward"
    }, {
        "contractUntil": "2019-06-30",
        "dateOfBirth": "1990-11-07",
        "jerseyNumber": 1,
        "name": "David de Gea",
        "nationality": "Spain",
        "position": "Keeper"
    }, {
        "contractUntil": "2021-06-30",
        "dateOfBirth": "1987-02-22",
        "jerseyNumber": 20,
        "name": "Sergio Romero",
        "nationality": "Argentina",
        "position": "Keeper"
    }
];

describe('Players Page', () => {
    it('should be true', function () {
        expect(true).toBe(true);
    });

    it('renders without crashing', () => {
        shallow(<PlayersPage/>);
    });

    it('renders players when searched', () => {
        const props = {
            players: players,
            actions: {
                loadPlayers: () => {
                    return Promise.resolve(players);
                }
            },
            filters: {name: 'Ro', position: '', age: ''}
        };
        const wrapper = mount(<PlayersPage {...props}/>);
        const searchButton = wrapper.find('.btn');
        expect(searchButton.prop('type').toBe('submit'));
        searchButton.simulate('click');
        expect(wrapper).find()
    });

});