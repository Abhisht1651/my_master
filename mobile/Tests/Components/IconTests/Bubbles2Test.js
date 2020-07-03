import React from 'react'
import 'react-native'
import renderer from 'react-test-renderer'

import Bubbles2 from '../../../App/Components/Icons/Bubbles2'

test('Bubbles2 Icon component renders correctly', () => {
  const tree = renderer.create(<Bubbles2 />).toJSON()
  expect(tree).toMatchSnapshot()
})
