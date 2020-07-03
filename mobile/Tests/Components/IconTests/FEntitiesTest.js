import React from 'react'
import 'react-native'
import renderer from 'react-test-renderer'

import FEntities from '../../../App/Components/Icons/FEntities'

test('FEntities Icon component renders correctly', () => {
  const tree = renderer.create(<FEntities />).toJSON()
  expect(tree).toMatchSnapshot()
})
