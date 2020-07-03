import React from 'react'
import { shallow } from 'enzyme'
import { TouchableOpacity, Text, Image } from 'react-native'
import LeaveGroup from '../../../App/Containers/ChatScreens/LeaveGroup'

describe('LeaveGroup', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<LeaveGroup />) // no compile-time error
  })
  it('LeaveGroup component renders correctly', () => {
    const wrapper = shallow(<LeaveGroup />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render 1 TouchableOpacity', () => {
    expect(wrapper.find(TouchableOpacity)).toHaveLength(1)
  })
  it('should render 4 Text', () => {
    expect(wrapper.find(Text)).toHaveLength(4)
  })
  it('should render 1 Image', () => {
    expect(wrapper.find(Image)).toHaveLength(1)
  })
})
