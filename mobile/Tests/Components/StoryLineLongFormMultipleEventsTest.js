// @flow
import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import StoryLineLongFormMultipleEvents from '../../App/Components/StoryLineLongFormMultipleEvents'

describe('StoryLineLongFormMultipleeEvents', () => {
  it('should render the component itself correctly', () => {
    const wrapper = shallow(<StoryLineLongFormMultipleEvents />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render the Text Component', () => {
    const wrapper = shallow(<StoryLineLongFormMultipleEvents />)
    expect(wrapper.find('Text')).toHaveLength(7)
  })
  it('should render the Image Component', () => {
    const wrapper = shallow(<StoryLineLongFormMultipleEvents />)
    expect(wrapper.find('Image')).toHaveLength(7)
  })
})
