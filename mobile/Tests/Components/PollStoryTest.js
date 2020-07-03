// @flow
import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import PollStory from '../../App/Components/PollStory'

describe('PollStory', () => {
  it('PollStory component renders correctly', () => {
    const wrapper = shallow(<PollStory />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render the Text Component', () => {
    const wrapper = shallow(<PollStory />)
    expect(wrapper.find('Text')).toHaveLength(10)
  })
  it('should render the Image Component', () => {
    const wrapper = shallow(<PollStory />)
    expect(wrapper.find('Image')).toHaveLength(9)
  })
})
