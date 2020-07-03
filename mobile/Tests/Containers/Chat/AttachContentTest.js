import React from 'react'
import { shallow } from 'enzyme'
import { TouchableOpacity, Text, Image } from 'react-native'
import AttachContent from '../../../App/Containers/ChatScreens/AttachContent'

describe('AttachContent', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<AttachContent />) // no compile-time error
  })
  it('AttachContent component renders correctly', () => {
    const wrapper = shallow(<AttachContent />)
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
})
