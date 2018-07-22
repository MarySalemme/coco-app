import React from 'react';
import App from './App';
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  const wrapper = shallow(<App />)
  const title = wrapper.find('.App-title')

  expect(title.text()).toBe('Welcome to React')
});
