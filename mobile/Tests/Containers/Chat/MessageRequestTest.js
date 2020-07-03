import React from 'react'
import { shallow } from 'enzyme'
import { Text, Image, TouchableOpacity } from 'react-native'
import MessageRequest from '../../../App/Containers/ChatScreens/MessageRequest'

describe('MessageRequest', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<MessageRequest route={{ params: { title: ' ' } }} />)
  })
  it('MessageRequest component renders correctly', () => {
    const wrapper = shallow(<MessageRequest route={{ params: { title: ' ' } }} />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render 2 TouchableOpacity', () => {
    expect(wrapper.find(TouchableOpacity)).toHaveLength(2)
  })
  it('should render 2 Text', () => {
    expect(wrapper.find(Text)).toHaveLength(2)
  })
  it('should render 2 Image', () => {
    expect(wrapper.find(Image)).toHaveLength(2)
  })
})
