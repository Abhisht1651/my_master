// @flow
import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import RelatedStoryLineScreen from '../../../App/Containers/Poll/RelatedStoryLines'
import StoryLineDefault from '../../../App/Components/StoryLineShortCardDefualt'

describe('RelatedStoryLine', () => {
  it('should render the component itself correctly', () => {
    const wrapper = shallow(<RelatedStoryLineScreen />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render the Text Component', () => {
    const wrapper = shallow(<RelatedStoryLineScreen />)
    expect(wrapper.find('Text')).toHaveLength(1)
  })
  it('should render the Image Component', () => {
    const wrapper = shallow(<RelatedStoryLineScreen />)
    expect(wrapper.find('Image')).toHaveLength(1)
  })
  it('should render the StoryLineDefault Component', () => {
    const wrapper = shallow(<RelatedStoryLineScreen />)
    expect(wrapper.find(StoryLineDefault)).toHaveLength(3)
  })
})
