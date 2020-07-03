import { Text } from 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import GradientScreen from '../../App/Components/GradientScreen'

test('GradientScreen component renders correctly', () => {
  const tree = renderer.create(<GradientScreen />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('GradientScreen component with Component renders correctly', () => {
  const tree = renderer.create(<GradientScreen middle={<Text>Hello</Text>} />).toJSON()
  expect(tree).toMatchSnapshot()
})
