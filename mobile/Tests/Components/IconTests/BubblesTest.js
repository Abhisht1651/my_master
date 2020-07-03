import React from 'react'
import 'react-native'
import renderer from 'react-test-renderer'

import Bubbles from '../../../App/Components/Icons/Bubbles'

test('Bubbles Icon component renders correctly', () => {
  const tree = renderer.create(<Bubbles />).toJSON()
  expect(tree).toMatchSnapshot()
})
