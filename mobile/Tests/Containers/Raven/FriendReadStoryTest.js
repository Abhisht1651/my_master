import React from 'react'
import { shallow } from 'enzyme'
import { TouchableOpacity, Text, FlatList } from 'react-native'
import FriendReadStory from '../../../App/Containers/Raven/FriendReadStory'
// Test for RavenAll (snapshot and props)
describe('RavenAll', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<FriendReadStory />) // no compile-time error
  })
  it('RavenAll component renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('RavenAll FlatList', () => {
    expect(wrapper.find(FlatList)).toHaveLength(1)
  })
  it('should render 1 TouchableOpacity', () => {
    expect(wrapper.find(TouchableOpacity)).toHaveLength(1)
  })
  it('should render 1 Text', () => {
    expect(wrapper.find(Text)).toHaveLength(1)
  })
})
