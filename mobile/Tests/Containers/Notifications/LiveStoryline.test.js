// @flow
import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import LiveStoryline from '../../../App/Components/Notifications/LiveStoryline'

describe('LiveStoryline', () => {
  it('LiveStoryline component renders correctly', () => {
    const tree = shallow(<LiveStoryline />)
    expect(tree).toMatchSnapshot()
  })

  it('should render the Text Component', () => {
    const wrapper = shallow(<LiveStoryline />)
    expect(wrapper.find('Text')).toHaveLength(4)
  })

  it('should render the Image Component', () => {
    const wrapper = shallow(<LiveStoryline />)
    expect(wrapper.find('Image')).toHaveLength(2)
  })
})
