import React from 'react'
import { shallow } from 'enzyme'
import { TouchableOpacity, Text, Image } from 'react-native'
import BlockUser from '../../../App/Containers/ChatScreens/BlockUser'

describe('BlockUser', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<BlockUser />) // no compile-time error
  })
  it('BlockUser component renders correctly', () => {
    const wrapper = shallow(<BlockUser />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render 2 TouchableOpacity', () => {
    expect(wrapper.find(TouchableOpacity)).toHaveLength(2)
  })
  it('should render 4 Text', () => {
    expect(wrapper.find(Text)).toHaveLength(4)
  })
  it('should render 1 Image', () => {
    expect(wrapper.find(Image)).toHaveLength(1)
  })
})
