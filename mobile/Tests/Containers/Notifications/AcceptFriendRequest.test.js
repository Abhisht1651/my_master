// @flow
import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import AcceptFriendRequest from '../../../App/Components/Notifications/AcceptFriendRequest'

describe('AcceptFriendRequest', () => {
  it('AcceptFriendRequest component renders correctly', () => {
    const tree = shallow(<AcceptFriendRequest />)
    expect(tree).toMatchSnapshot()
  })

  it('should render the Text Component', () => {
    const wrapper = shallow(<AcceptFriendRequest />)
    expect(wrapper.find('Text')).toHaveLength(3)
  })

  it('should render the Image Component', () => {
    const wrapper = shallow(<AcceptFriendRequest />)
    expect(wrapper.find('Image')).toHaveLength(2)
  })
})
