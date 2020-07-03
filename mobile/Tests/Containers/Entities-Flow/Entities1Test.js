import React from 'react'
import { shallow } from 'enzyme'
import { Image } from 'react-native'
import { TouchableOpacity, Text } from 'react-native'
import Entities1 from '../../../App/Containers/EntitiesScreens/Entities1'
// Test for Entities (snapshot and props)
describe('Entities1', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Entities1 route={{ params: { selected: [] } }} />) // no compile-time error
  })
  it('Entities1 component renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('should render 1 TouchableOpacity', () => {
    expect(wrapper.find(TouchableOpacity)).toHaveLength(1)
  })
  it('should render 7 Text', () => {
    expect(wrapper.find(Text)).toHaveLength(7)
  })
})
