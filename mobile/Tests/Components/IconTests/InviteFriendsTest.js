import React from 'react'
import 'react-native'
import renderer from 'react-test-renderer'

import InviteFriends from '../../../App/Components/Icons/InviteFriends'

test('InviteFriends Icon component renders correctly', () => {
  const tree = renderer.create(<InviteFriends />).toJSON()
  expect(tree).toMatchSnapshot()
})
