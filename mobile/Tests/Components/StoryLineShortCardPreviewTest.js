// @flow
import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import StoryLineShortCardPreview from '../../App/Components/StoryLineShortCardPreview'

describe('StoryLineShortCardPreview', () => {
  it('should render the component itself correctly', () => {
    const wrapper = shallow(<StoryLineShortCardPreview />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render the Text Component', () => {
    const wrapper = shallow(<StoryLineShortCardPreview />)
    expect(wrapper.find('Text')).toHaveLength(4)
  })
  it('should render the Image Component', () => {
    const wrapper = shallow(<StoryLineShortCardPreview />)
    expect(wrapper.find('Image')).toHaveLength(1)
  })
})
