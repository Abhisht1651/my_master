import React from 'react'
import { shallow } from 'enzyme'
import { FlatList } from 'react-native'
import { ReactionBubbles } from '../../../App/Components/NewsFeedComponents/ReactionBubbles'
// Test for ScrollableFeed (snapshot and props)
describe('ReactionBubbles', () => {
  let wrapper
  beforeEach(() => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    wrapper = shallow(<ReactionBubbles />) // no compile-time error
  })
  it('ReactionBubbles component renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('should flatlist return keyExtractor correctly', () => {
    expect(wrapper.find(FlatList)).toHaveLength(1)
  })
})
