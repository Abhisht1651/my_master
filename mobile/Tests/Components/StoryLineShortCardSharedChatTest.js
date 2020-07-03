// @flow
import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import StoryLineShortCardSharedChat from '../../App/Components/StoryLineShortCardSharedChat'

describe('StoryLineShortCardSharedChat', () => {
  it('should render the component itself correctly', () => {
    const wrapper = shallow(<StoryLineShortCardSharedChat />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render the Text Component', () => {
    const wrapper = shallow(<StoryLineShortCardSharedChat />)
    expect(wrapper.find('Text')).toHaveLength(5)
  })
  it('should render the Image Component', () => {
    const wrapper = shallow(<StoryLineShortCardSharedChat />)
    expect(wrapper.find('Image')).toHaveLength(3)
  })
})
