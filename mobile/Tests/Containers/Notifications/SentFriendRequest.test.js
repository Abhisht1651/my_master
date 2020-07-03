// @flow
import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import SentFriendRequest from '../../../App/Components/Notifications/SentFriendRequest'

describe('SentFriendRequest', () => {
  it('SentFriendRequest component renders correctly', () => {
    const tree = shallow(<SentFriendRequest />)
    expect(tree).toMatchSnapshot()
  })

  it('should render the Text Component', () => {
    const wrapper = shallow(<SentFriendRequest />)
    expect(wrapper.find('Text')).toHaveLength(5)
  })

  it('should render the Image Component', () => {
    const wrapper = shallow(<SentFriendRequest />)
    expect(wrapper.find('Image')).toHaveLength(2)
  })

  it('should render the Image Component', () => {
    const wrapper = shallow(<SentFriendRequest />)
    expect(wrapper.find('ImageBackground')).toHaveLength(0)
  })
})
