import React from 'react'
import { shallow } from 'enzyme'
import { TouchableOpacity, Text, FlatList } from 'react-native'
import RavenAll from '../../../App/Containers/Raven/RavenAll'
// Test for RavenAll (snapshot and props)
describe('RavenAll', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<RavenAll />) // no compile-time error
  })
  it('RavenAll component renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('RavenAll BottomNav', () => {
    expect(wrapper.find('BottomNav')).toHaveLength(1)
  })
  it('should render 3 TouchableOpacity', () => {
    expect(wrapper.find(TouchableOpacity)).toHaveLength(3)
  })
  it('should render 4 Text', () => {
    expect(wrapper.find(Text)).toHaveLength(4)
  })
  it('should render 1 FlatList', () => {
    expect(wrapper.find(FlatList)).toHaveLength(1)
  })
})
