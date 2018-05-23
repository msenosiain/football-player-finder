import React from 'react';
import {mount, shallow} from 'enzyme';
import {PlayersPage} from './PlayersPage';
import _ from 'lodash';

const mockPlayers = [
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
    }
];

describe('Players Page', () => {

    function setup(players) {
        const props = {
            players: players,
            positions: [],
            allPositions: [],
            filters: {name: '', position: '', age: ''},
            actions: {
                loadPlayers: () => {
                    return Promise.resolve(players);
                }
            }

        };
        return mount(<PlayersPage {...props}/>)
    }

    it('renders without crashing', () => {
        shallow(<PlayersPage/>);
    });

    it('renders players rows', () => {
        const wrapper = setup(mockPlayers);
        const searchButton = wrapper.find('.btn');
        searchButton.simulate('click');
        expect(wrapper.find('tbody tr').length).toBe(3);
    });

    it('renders players rows filtered by name', () => {
        const wrapper = setup(_.filter(mockPlayers, (player) => {
            return player.name.toLowerCase().indexOf('ro') > -1;
        }));
        const searchButton = wrapper.find('.btn');
        searchButton.simulate('click');
        expect(wrapper.find('tbody tr').length).toBe(2);
    });

    it('renders players rows filtered by age', () => {
        const wrapper = setup(_.filter(mockPlayers, {'age': '31'}));
        const searchButton = wrapper.find('.btn');
        searchButton.simulate('click');
        expect(wrapper.find('tbody tr').length).toBe(1);
    });

    it('age must be two chars only', () => {
        const wrapper = setup(mockPlayers);
        const mockedEvent = {target: {name: 'age', value: '212'}};
        wrapper.instance().updateFiltersState(mockedEvent);
        expect(wrapper.state().filters.age).toBe('');
    });

    it('age must be greater than 18', () => {
        const wrapper = setup(mockPlayers);
        const mockedEvent = {target: {name: 'age', value: '17'}};
        wrapper.instance().updateFiltersState(mockedEvent);
        expect(wrapper.state().filters.age).toBe('');
    });

    it('age must be lower than 40', () => {
        const wrapper = setup(mockPlayers);
        const mockedEvent = {target: {name: 'age', value: '41'}};
        wrapper.instance().updateFiltersState(mockedEvent);
        expect(wrapper.state().filters.age).toBe('');
    });
});