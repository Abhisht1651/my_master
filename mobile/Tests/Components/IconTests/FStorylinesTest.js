import React from 'react'
import 'react-native'
import renderer from 'react-test-renderer'

import FStorylines from '../../../App/Components/Icons/FStorylines'

test('FStorylines Icon component renders correctly', () => {
  const tree = renderer.create(<FStorylines />).toJSON()
  expect(tree).toMatchSnapshot()
})
