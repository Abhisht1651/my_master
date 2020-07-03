import React from 'react'
import { shallow } from 'enzyme'
import { Image } from 'react-native'
import RavenSent from '../../../App/Containers/Raven/RavenSent'
// Test for RavenSent (snapshot and props)

describe('RavenAll', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<RavenSent route={{ params: { selected: [] } }} />) // no compile-time error
  })
  it('RavenAll component renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('should render 2 Image', () => {
    expect(wrapper.find(Image)).toHaveLength(2)
  })
})
