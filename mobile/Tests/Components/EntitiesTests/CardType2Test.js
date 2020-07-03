import React from 'react'
import 'react-native'
import renderer from 'react-test-renderer'

import CardType2 from '../../../App/Components/Entities/CardType2'

test('CardType1 Entity component renders correctly', () => {
  const tree = renderer.create(<CardType2 />).toJSON()
  expect(tree).toMatchSnapshot()
})
