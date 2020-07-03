import React from 'react'
import 'react-native'
import renderer from 'react-test-renderer'

import Friends from '../../../App/Components/Icons/Friends'

test('Friends Icon component renders correctly', () => {
  const tree = renderer.create(<Friends />).toJSON()
  expect(tree).toMatchSnapshot()
})
