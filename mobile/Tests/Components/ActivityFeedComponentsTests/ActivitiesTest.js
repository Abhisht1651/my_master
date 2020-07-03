import React from 'react'
import { FlatList, Image } from 'react-native'
import { shallow } from 'enzyme'
import Activities from '../../../App/Components/ActivityFeedComponents/Activities'
// Test for Activities (snapshot and props)
describe('Activities', () => {
  let wrapper
  it('Activities component renders correctly', () => {
    wrapper = shallow(<Activities />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render 1 flatlist', () => {
    wrapper = shallow(<Activities follow />)
    expect(wrapper.find(FlatList)).toHaveLength(1)
  })
  it('should render 0 flatlist', () => {
    wrapper = shallow(<Activities />)
    expect(wrapper.find(FlatList)).toHaveLength(0)
  })
  it('should render 1 Image', () => {
    wrapper = shallow(<Activities />)
    expect(wrapper.find(Image)).toHaveLength(1)
  })
})
