// @flow
import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import CommentBox from '../../App/Components/CommentBox'

describe('ShortPoll', () => {
  it('CommentBox component renders correctly', () => {
    const wrapper = shallow(<CommentBox />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render the Text Component', () => {
    const wrapper = shallow(<CommentBox />)
    expect(wrapper.find('Text')).toHaveLength(5)
  })
  it('should render the Image Component', () => {
    const wrapper = shallow(<CommentBox />)
    expect(wrapper.find('Image')).toHaveLength(2)
  })
})
