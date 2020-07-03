import React from 'react'
import 'react-native'
import renderer from 'react-test-renderer'

import CardType1 from '../../../App/Components/Entities/CardType1'

test('CardType1 Entity component renders correctly', () => {
  const tree = renderer.create(<CardType1 />).toJSON()
  expect(tree).toMatchSnapshot()
})
