import React from 'react'
import { shallow } from 'enzyme'
import { Text, Image, TouchableOpacity, FlatList } from 'react-native'
import IndividualChat from '../../../App/Containers/ChatScreens/IndividualChat'

describe('IndividualChat', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<IndividualChat route={{ params: { title: ' ' } }} />)
  })
  it('IndividualChat component renders correctly', () => {
    const wrapper = shallow(<IndividualChat route={{ params: { title: ' ' } }} />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render 2 Text', () => {
    expect(wrapper.find(Text)).toHaveLength(2)
  })
  it('should render 2 Image', () => {
    expect(wrapper.find(Image)).toHaveLength(2)
  })
  it('should render 3 TouchableOpacity', () => {
    expect(wrapper.find(TouchableOpacity)).toHaveLength(3)
  })
  it('should render 1 Flatlist', () => {
    expect(wrapper.find(FlatList)).toHaveLength(1)
  })
})
