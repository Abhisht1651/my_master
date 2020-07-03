import React from 'react'
import { shallow } from 'enzyme'
import { Image } from 'react-native'
import { TouchableOpacity, Text } from 'react-native'
import Entities2 from '../../../App/Containers/EntitiesScreens/Entities2'
// Test for Entities2 (snapshot and props)
describe('Entities2', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Entities2 route={{ params: { selected: [] } }} />) // no compile-time error
  })
  it('Entities2 component renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('should render 5 TouchableOpacity', () => {
    expect(wrapper.find(TouchableOpacity)).toHaveLength(5)
  })
  it('should render 11 Text', () => {
    expect(wrapper.find(Text)).toHaveLength(11)
  })
})
