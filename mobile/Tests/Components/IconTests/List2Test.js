import React from 'react'
import 'react-native'
import renderer from 'react-test-renderer'

import List2 from '../../../App/Components/Icons/List2'

test('List2 Icon component renders correctly', () => {
  const tree = renderer.create(<List2 />).toJSON()
  expect(tree).toMatchSnapshot()
})
