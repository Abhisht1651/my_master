// @flow
import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import StoryLineLongFormSingleEvent from '../../App/Components/StoryLineLongFormSingleEvent'

describe('StoryLineLongFormSingleEvent', () => {
  it('should render the component itself correctly', () => {
    const wrapper = shallow(<StoryLineLongFormSingleEvent />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render the Text Component', () => {
    const wrapper = shallow(<StoryLineLongFormSingleEvent />)
    expect(wrapper.find('Text')).toHaveLength(9)
  })
  it('should render the Image Component', () => {
    const wrapper = shallow(<StoryLineLongFormSingleEvent />)
    expect(wrapper.find('Image')).toHaveLength(14)
  })
})
