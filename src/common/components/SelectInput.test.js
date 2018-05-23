import React from 'react';
import {shallow} from 'enzyme';
import SelectInput from './SelectInput';

describe('Select Input', () => {

    it('renders label when provided', () => {
        const props = {
            name: 'Select',
            label: 'label',
            defaultOption: 'select',
            options: [],
            value: '',
            onChange: () => {
            },
        };
        const wrapper = shallow(<SelectInput {...props}/>);
        expect(wrapper.find('label').text()).toEqual('label');
    });

    it('renders options when provided', () => {
        const props = {
            name: 'Select',
            label: 'label',
            defaultOption: 'select',
            options: [{value: '1', text: 'one'}, {value: '2', text: 'two'}],
            value: '',
            onChange: () => {
            },
        };
        const wrapper = shallow(<SelectInput {...props}/>);
        expect(wrapper.find('option').length).toEqual(3);
    });

});