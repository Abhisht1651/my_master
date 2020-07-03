// @flow
import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import ReplyComment from '../../../App/Components/Notifications/ReplyComment'

describe('ReplyComment', () => {
  it('ReplyComment component renders correctly', () => {
    const tree = shallow(<ReplyComment />)
    expect(tree).toMatchSnapshot()
  })

  it('should render the Text Component', () => {
    const wrapper = shallow(<ReplyComment />)
    expect(wrapper.find('Text')).toHaveLength(4)
  })

  it('should render the Image Component', () => {
    const wrapper = shallow(<ReplyComment />)
    expect(wrapper.find('Image')).toHaveLength(2)
  })

  it('should render the Image Component', () => {
    const wrapper = shallow(<ReplyComment />)
    expect(wrapper.find('ImageBackground')).toHaveLength(1)
  })
})
