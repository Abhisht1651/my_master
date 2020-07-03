// @flow
import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import InviteFriends2 from '../../../../App/Containers/Settings/Newzera/InviteFriends2'

describe('InviteFriends2', () => {
  it('InviteFriends2 component renders correctly', () => {
    const tree = shallow(<InviteFriends2 />)
    expect(tree).toMatchSnapshot()
  })

  it('should render the Text Component', () => {
    const wrapper = shallow(<InviteFriends2 />)
    expect(wrapper.find('Text')).toHaveLength(18)
  })

  it('should render the Image Component', () => {
    const wrapper = shallow(<InviteFriends2 />)
    expect(wrapper.find('Image')).toHaveLength(7)
  })
})
