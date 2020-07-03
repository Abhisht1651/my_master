import { Text } from 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import CircularGradient from '../../App/Components/CircularGradient'

const color = ['rgba(70, 195, 244, 1)', 'rgba(178, 124, 243, 1)']

test('CircularGradient component renders correctly', () => {
  const tree = renderer.create(<CircularGradient colors={color} />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('CircularGradient component with Component renders correctly', () => {
  const tree = renderer
    .create(<CircularGradient colors={color} source={<Text>Hello</Text>} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
