import React from 'react'
import { shallow } from 'enzyme'
import { TouchableOpacity, Text, ScrollView, Image } from 'react-native'
import InsertSticker from '../../../App/Containers/ChatScreens/InsertSticker'

describe('InsertSticker', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<InsertSticker />) // no compile-time error
  })
  it('InsertSticker component renders correctly', () => {
    const wrapper = shallow(<InsertSticker />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render 1 TouchableOpacity', () => {
    expect(wrapper.find(TouchableOpacity)).toHaveLength(1)
  })
  it('should render 1 Text', () => {
    expect(wrapper.find(Text)).toHaveLength(1)
  })
  it('should render 1 Image', () => {
    expect(wrapper.find(Image)).toHaveLength(1)
  })
  it('should render 1 ScrollView', () => {
    expect(wrapper.find(ScrollView)).toHaveLength(1)
  })
})
