import React from 'react'
import { shallow } from 'enzyme'
import { FlatList, TouchableOpacity } from 'react-native'
import ChatOptionsGroup from '../../../App/Containers/ChatScreens/ChatOptionsGroup'

describe('ChatOptions', () => {
  it('ChatOptions component renders correctly', () => {
    const wrapper = shallow(<ChatOptionsGroup route={{ params: { title: ' ' } }} />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render 1 flatlist', () => {
    const wrapper = shallow(<ChatOptionsGroup route={{ params: { title: ' ' } }} />)
    expect(wrapper.find(FlatList)).toHaveLength(1)
  })
  it('should render 2 TouchableOpacity', () => {
    const item = {
      id: '1'
    }
    const wrapper = shallow(<ChatOptionsGroup route={{ params: { title: ' ' } }} />)
    const flatlist = wrapper.find(FlatList)
    const element = flatlist.renderProp('renderItem')({ item })
    expect(element.find(TouchableOpacity)).toHaveLength(2)
  })
})
