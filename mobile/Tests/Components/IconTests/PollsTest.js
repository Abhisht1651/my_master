import React from 'react'
import 'react-native'
import renderer from 'react-test-renderer'

import Polls from '../../../App/Components/Icons/Polls'

test('Polls Icon component renders correctly', () => {
  const tree = renderer.create(<Polls />).toJSON()
  expect(tree).toMatchSnapshot()
})
