import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import PlayersFilterForm from './PlayersFilterForm';

function setup() {
    const props = {
        filters: {},
        allPositions:[],
        onFilter: () => {},
        onChange: () => {}
    };

    return shallow(<PlayersFilterForm {...props} />);
}

describe('PlayerFiltersForm', () => {
    it('renders form', () => {
        const wrapper = setup();
        expect(wrapper.find('form').length).toBe(1);
    });

    it('form has class "form-inline', () => {
        const wrapper = setup();
        expect(wrapper.find('form').hasClass('form-inline')).toBe(true);
    });

    it('save button is labeled "Search ⏎"', () => {
        const wrapper = setup();
        expect(wrapper.find('input').props().value).toBe('Search ⏎');
    });


});
