import React from 'react'
import 'react-native'
import renderer from 'react-test-renderer'

import Requests from '../../../App/Components/Icons/Requests'

test('Requests Icon component renders correctly', () => {
  const tree = renderer.create(<Requests />).toJSON()
  expect(tree).toMatchSnapshot()
})
