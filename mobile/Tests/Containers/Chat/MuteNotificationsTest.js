import React from 'react'
import { shallow } from 'enzyme'
import { TouchableOpacity, Text, Image, FlatList } from 'react-native'
import MuteNotifications from '../../../App/Containers/ChatScreens/MuteNotifications'

describe('MuteNotifications', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<MuteNotifications />) // no compile-time error
  })
  it('MuteNotifications component renders correctly', () => {
    const wrapper = shallow(<MuteNotifications />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render 1 TouchableOpacity', () => {
    expect(wrapper.find(TouchableOpacity)).toHaveLength(1)
  })
  it('should render 2 Text', () => {
    expect(wrapper.find(Text)).toHaveLength(2)
  })
  it('should render 1 Image', () => {
    expect(wrapper.find(Image)).toHaveLength(1)
  })
  it('should render 1 Flatlist', () => {
    expect(wrapper.find(FlatList)).toHaveLength(1)
  })
})
