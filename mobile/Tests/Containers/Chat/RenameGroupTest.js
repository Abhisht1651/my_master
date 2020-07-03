import React from 'react'
import { shallow } from 'enzyme'
import { TouchableOpacity, Text, Image, TextInput } from 'react-native'
import RenameGroup from '../../../App/Containers/ChatScreens/RenameGroup'

describe('RenameGroup', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<RenameGroup />) // no compile-time error
  })
  it('RenameGroup component renders correctly', () => {
    const wrapper = shallow(<RenameGroup />)
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
  it('should render 1 TextInput', () => {
    expect(wrapper.find(TextInput)).toHaveLength(1)
  })
})
