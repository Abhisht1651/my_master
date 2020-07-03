import React from 'react'
import { shallow } from 'enzyme'
import { FlatList } from 'react-native'
import MessageScreen from '../../../App/Containers/ChatScreens/MessageScreen'

describe('MessageScreen', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<MessageScreen />)
  })
  it('ActivityFeed component renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('should render 1 flatlist', () => {
    expect(wrapper.find(FlatList)).toHaveLength(1)
  })
  it('MessageScreen BottomNav', () => {
    expect(wrapper.find('BottomNav')).toHaveLength(1)
  })
})
