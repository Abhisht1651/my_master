import React from 'react'
import { shallow } from 'enzyme'
import LaunchScreen from '../App/Containers/Onboarding/LaunchScreen'

// describe what we are testing
describe('Launch screen Component', () => {
  // make our assertion and what we expect to happen
  it('should render without throwing an error', () => {
    expect(shallow(<LaunchScreen />).exists()).toBe(true)
  })
})
