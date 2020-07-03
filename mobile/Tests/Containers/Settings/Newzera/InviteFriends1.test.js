// @flow
import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import InviteFriends1 from '../../../../App/Containers/Settings/Newzera/InviteFriends1'

describe('InviteFriends1', () => {
  it('InviteFriends1 component renders correctly', () => {
    const tree = shallow(<InviteFriends1 />)
    expect(tree).toMatchSnapshot()
  })

  it('should render the Text Component', () => {
    const wrapper = shallow(<InviteFriends1 />)
    expect(wrapper.find('Text')).toHaveLength(3)
  })

  it('should render the Image Component', () => {
    const wrapper = shallow(<InviteFriends1 />)
    expect(wrapper.find('Image')).toHaveLength(2)
  })
})
