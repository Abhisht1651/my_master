import React from 'react'
import { shallow } from 'enzyme'
import { FlatList, TouchableOpacity, Text } from 'react-native'
import MessageRequest from '../../../App/Containers/ChatScreens/MessageRequestConversations'

describe('MessageScreen', () => {
  it('ActivityFeed component renders correctly', () => {
    const wrapper = shallow(<MessageRequest />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render 1 flatlist', () => {
    const wrapper = shallow(<MessageRequest />)
    expect(wrapper.find(FlatList)).toHaveLength(1)
  })
  it('should render 2 TouchableOpacity', () => {
    const item = {
      id: '1'
    }
    const wrapper = shallow(<MessageRequest />)
    const flatlist = wrapper.find(FlatList)
    const element = flatlist.renderProp('renderItem')({ item })
    expect(element.find(TouchableOpacity)).toHaveLength(2)
  })
  it('should render 1 Flatlist', () => {
    const item = {
      id: '3'
    }
    const wrapper = shallow(<MessageRequest />)
    const flatlist = wrapper.find(FlatList)
    const element = flatlist.renderProp('renderItem')({ item })
    expect(element.find(FlatList)).toHaveLength(1)
  })
  it('should render 1 Text', () => {
    const item = {
      id: '2'
    }
    const wrapper = shallow(<MessageRequest />)
    const flatlist = wrapper.find(FlatList)
    const element = flatlist.renderProp('renderItem')({ item })
    expect(element.find(Text)).toHaveLength(1)
  })
})
