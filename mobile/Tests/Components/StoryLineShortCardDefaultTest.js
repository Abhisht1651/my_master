// @flow
import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import StoryLineShortCardDefault from '../../App/Components/StoryLineShortCardDefualt'

describe('StoryLineShortCardDefault', () => {
  it('should render the component itself correctly', () => {
    const wrapper = shallow(<StoryLineShortCardDefault />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render the Text Component', () => {
    const wrapper = shallow(<StoryLineShortCardDefault />)
    expect(wrapper.find('Text')).toHaveLength(6)
  })
  it('should render the Image Component', () => {
    const wrapper = shallow(<StoryLineShortCardDefault />)
    expect(wrapper.find('Image')).toHaveLength(4)
  })
})
