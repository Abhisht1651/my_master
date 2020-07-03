import React from 'react'
import 'react-native'
import renderer from 'react-test-renderer'

import ThumbsSmall from '../../../App/Components/Entities/ThumbsSmall'

test('CardType1 Entity component renders correctly', () => {
  const tree = renderer.create(<ThumbsSmall />).toJSON()
  expect(tree).toMatchSnapshot()
})
