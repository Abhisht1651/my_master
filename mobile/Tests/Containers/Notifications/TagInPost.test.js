// @flow
import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import TagInPost from '../../../App/Components/Notifications/TagInPost'

describe('TagInPost', () => {
  it('TagInPost component renders correctly', () => {
    const tree = shallow(<TagInPost />)
    expect(tree).toMatchSnapshot()
  })

  it('should render the Text Component', () => {
    const wrapper = shallow(<TagInPost />)
    expect(wrapper.find('Text')).toHaveLength(4)
  })

  it('should render the Image Component', () => {
    const wrapper = shallow(<TagInPost />)
    expect(wrapper.find('Image')).toHaveLength(2)
  })

  it('should render the Image Component', () => {
    const wrapper = shallow(<TagInPost />)
    expect(wrapper.find('ImageBackground')).toHaveLength(0)
  })
})
