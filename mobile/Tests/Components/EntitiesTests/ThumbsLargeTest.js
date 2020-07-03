import React from 'react'
import 'react-native'
import renderer from 'react-test-renderer'

import ThumbsLarge from '../../../App/Components/Entities/ThumbsLarge'

test('CardType1 Entity component renders correctly', () => {
  const tree = renderer.create(<ThumbsLarge />).toJSON()
  expect(tree).toMatchSnapshot()
})
