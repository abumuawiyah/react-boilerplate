import React from 'react';
import { shallow } from 'enzyme';
import Card from '../index';


const render = () =>
	shallow(<Card />);


describe('<Card />', () => {
	it('exists', () => {
		expect(render().exists()).toBe(true);
    })
})

