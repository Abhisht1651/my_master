import React from 'react'
import { shallow } from 'enzyme'
import { Image } from 'react-native'
import { TouchableOpacity, Text } from 'react-native'
import TrendingStoryline from '../../../App/Containers/EntitiesScreens/TrendingStoryline'
// Test for Entities (snapshot and props)
describe('TrendingStoryline', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<TrendingStoryline route={{ params: { selected: [] } }} />) // no compile-time error
  })
  it('TrendingStoryline component renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('should render 1 TouchableOpacity', () => {
    expect(wrapper.find(TouchableOpacity)).toHaveLength(1)
  })
  it('should render 1 Text', () => {
    expect(wrapper.find(Text)).toHaveLength(1)
  })
})
