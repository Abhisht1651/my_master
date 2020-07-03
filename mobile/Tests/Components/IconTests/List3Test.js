import React from 'react'
import 'react-native'
import renderer from 'react-test-renderer'

import List3 from '../../../App/Components/Icons/List3'

test('List3 Icon component renders correctly', () => {
  const tree = renderer.create(<List3 />).toJSON()
  expect(tree).toMatchSnapshot()
})
