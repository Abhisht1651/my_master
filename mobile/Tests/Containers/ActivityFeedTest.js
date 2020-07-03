import React from 'react'
import { shallow } from 'enzyme'
import { FlatList } from 'react-native'
import ActivityFeed from '../../App/Containers/ActivityFeed'
// Test for ActivityFeed (snapshot and props)
describe('ActivityFeed', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<ActivityFeed />)
  })
  it('ActivityFeed component renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('should render 1 flatlist', () => {
    expect(wrapper.find(FlatList)).toHaveLength(1)
  })
  it('should flatlist return keyExtractor correctly', () => {
    const key = wrapper.find(FlatList).props().keyExtractor({ id: '2' })
    expect(key).toEqual('2')
  })
  it('ActivityFeed BottomNav', () => {
    expect(wrapper.find('BottomNav')).toHaveLength(1)
  })
})
