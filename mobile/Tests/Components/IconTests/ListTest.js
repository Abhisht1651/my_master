import React from 'react'
import 'react-native'
import renderer from 'react-test-renderer'

import List from '../../../App/Components/Icons/List'

test('List Icon component renders correctly', () => {
  const tree = renderer.create(<List />).toJSON()
  expect(tree).toMatchSnapshot()
})
