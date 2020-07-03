import React from 'react'
import { shallow } from 'enzyme'
import Dropdown from '../../../App/Components/ActivityFeedComponents/Dropdown'
// Test for Dropdown
describe('Dropdown', () => {
  let wrapper
  it('Dropdown component renders correctly', () => {
    wrapper = shallow(<Dropdown />)
    expect(wrapper).toMatchSnapshot()
  })
})
