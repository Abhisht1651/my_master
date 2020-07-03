import { shallow } from 'enzyme'
import React from 'react'

import FriendRequestList from '../../App/Components/FriendRequestList'
import { X3SButton } from '../../App/Components/Buttons/X3SButton'

describe('FriendRequestList', () => {
  it('should match to snapshot', () => {
    const component = shallow(<FriendRequestList />)
    expect(component).toMatchSnapshot()
  })

  it('should render Text ', () => {
    const wrapper = shallow(<FriendRequestList />)
    expect(wrapper.find('Text')).toHaveLength(3)
  })

  it('should render MediumProfilePicture ', () => {
    const wrapper = shallow(<FriendRequestList />)
    expect(wrapper.find('MediumProfilePicture')).toHaveLength(1)
  })
  it('should render X3SButton ', () => {
    const wrapper = shallow(<FriendRequestList />)
    expect(wrapper.find(X3SButton)).toHaveLength(2)
  })
})
