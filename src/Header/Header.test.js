import Header from './Header'
import React from 'react'
import { shallow } from 'enzyme'

test('Header component renders the header text', () => {
  const wrapper = shallow(<Header />)

  const name = wrapper.find('.name')

  expect(name.text()).toBe('Coco eventi')
})
