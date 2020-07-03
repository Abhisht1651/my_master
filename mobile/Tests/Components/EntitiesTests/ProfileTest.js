import React from 'react'
import 'react-native'
import renderer from 'react-test-renderer'

import Profile from '../../../App/Components/Entities/Profile'

test('CardType1 Entity component renders correctly', () => {
  const tree = renderer.create(<Profile />).toJSON()
  expect(tree).toMatchSnapshot()
})
