import React from 'react'
import { shallow } from 'enzyme'
import { Animated } from 'react-native'
import NewsFeed from '../../App/Containers/NewsFeed'
// Test for ScrollableFeed (snapshot and props)
const createTestProps = () => ({
  navigation: {
    navigate: jest.fn()
  }
})
describe('ActivityFeed', () => {
  let wrapper
  let props
  beforeEach(() => {
    props = createTestProps({})
    // eslint-disable-next-line react/jsx-props-no-spreading
    wrapper = shallow(<NewsFeed {...props} />) // no compile-time error
  })
  it('ScrollableFeed component renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('should flatlist return keyExtractor correctly', () => {
    expect(wrapper.find(Animated.FlatList)).toHaveLength(1)
  })
  it('ScrollableFeed BottomNav', () => {
    expect(wrapper.find('BottomNav')).toHaveLength(1)
  })
  it('Navigate to ActivityFeed', () => {
    wrapper.find('BottomNav').props().activityonPress()
    expect(props.navigation.navigate).toHaveBeenCalledWith('ActivityFeed')
  })
})
