import React from 'react'
import { shallow } from 'enzyme'
import { Text, Image, TouchableOpacity, FlatList } from 'react-native'
import Chat2 from '../../../App/Containers/ChatScreens/Chat2'

describe('Chat2', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Chat2 route={{ params: { title: ' ' } }} />)
  })
  it('Chat2 component renders correctly', () => {
    const wrapper = shallow(<Chat2 route={{ params: { title: ' ' } }} />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render 2 Text', () => {
    expect(wrapper.find(Text)).toHaveLength(2)
  })
  it('should render 3 Image', () => {
    expect(wrapper.find(Image)).toHaveLength(3)
  })
  it('should render 3 TouchableOpacity', () => {
    expect(wrapper.find(TouchableOpacity)).toHaveLength(3)
  })
  it('should render 1 Flatlist', () => {
    expect(wrapper.find(FlatList)).toHaveLength(1)
  })
})
