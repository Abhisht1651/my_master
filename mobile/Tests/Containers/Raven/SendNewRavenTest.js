import React from 'react'
import { shallow } from 'enzyme'
import { TouchableOpacity, FlatList, Text } from 'react-native'
import SendNewRaven from '../../../App/Containers/Raven/SendNewRaven'
// Test for RavenAll (snapshot and props)
describe('SendNewRaven', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<SendNewRaven />) // no compile-time error
  })
  it('RavenAll component renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('RavenAll BottomNav', () => {
    expect(wrapper.find('BottomNav')).toHaveLength(0)
  })
  it('should render 1 TouchableOpacity', () => {
    expect(wrapper.find(TouchableOpacity)).toHaveLength(1)
  })
  it('should render 1 FlatList', () => {
    expect(wrapper.find(FlatList)).toHaveLength(1)
  })
  it('should render 1 Text', () => {
    expect(wrapper.find(Text)).toHaveLength(1)
  })
})
