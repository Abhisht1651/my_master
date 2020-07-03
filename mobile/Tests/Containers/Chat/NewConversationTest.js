import React from 'react'
import { shallow } from 'enzyme'
import { TouchableOpacity, Text, Image, FlatList, ScrollView } from 'react-native'
import NewConversation from '../../../App/Containers/ChatScreens/NewConversation'

describe('NewConversation', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<NewConversation />) // no compile-time error
  })
  it('NewConversation component renders correctly', () => {
    const wrapper = shallow(<NewConversation />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render 2 TouchableOpacity', () => {
    expect(wrapper.find(TouchableOpacity)).toHaveLength(2)
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
  it('should render 1 ScrollView', () => {
    expect(wrapper.find(ScrollView)).toHaveLength(1)
  })
})
