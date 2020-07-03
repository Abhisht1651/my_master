import React from 'react'
import { shallow } from 'enzyme'
import { Image } from 'react-native'
import { TouchableOpacity, Text } from 'react-native'
import RelatedEntities from '../../../App/Containers/EntitiesScreens/RelatedEntities'
// Test for Entities (snapshot and props)
describe('RelatedEntities', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<RelatedEntities route={{ params: { selected: [] } }} />) // no compile-time error
  })
  it('Related Entites component renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('should render 1 TouchableOpacity', () => {
    expect(wrapper.find(TouchableOpacity)).toHaveLength(1)
  })
  it('should render 1 Text', () => {
    expect(wrapper.find(Text)).toHaveLength(1)
  })
})
