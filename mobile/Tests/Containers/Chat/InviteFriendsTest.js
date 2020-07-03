import React from 'react'
import { shallow } from 'enzyme'
import { TouchableOpacity, Text, Image, ScrollView } from 'react-native'
import InviteFriends from '../../../App/Containers/ChatScreens/InviteFriends'

describe('InviteFriends', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<InviteFriends />) // no compile-time error
  })
  it('InviteFriends component renders correctly', () => {
    const wrapper = shallow(<InviteFriends />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render 2 TouchableOpacity', () => {
    expect(wrapper.find(TouchableOpacity)).toHaveLength(2)
  })
  it('should render 3 Text', () => {
    expect(wrapper.find(Text)).toHaveLength(3)
  })
  it('should render 1 Image', () => {
    expect(wrapper.find(Image)).toHaveLength(1)
  })
  it('should render 1 ScrollView', () => {
    expect(wrapper.find(ScrollView)).toHaveLength(1)
  })
})
