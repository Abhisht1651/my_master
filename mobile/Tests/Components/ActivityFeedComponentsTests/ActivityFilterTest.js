import React from 'react'
import { FlatList, Image, TouchableWithoutFeedback } from 'react-native'
import { shallow } from 'enzyme'
import ActivityFilter from '../../../App/Components/ActivityFeedComponents/ActivityFilter'
import { SmallButton } from '../../../App/Components/Buttons/SmallButton'
// Test for ActivityFilter
describe('ActivityFilter', () => {
  let wrapper
  it('ActivityFilter component renders correctly', () => {
    wrapper = shallow(<ActivityFilter />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render 1 flatlist', () => {
    wrapper = shallow(<ActivityFilter />)
    expect(wrapper.find(FlatList)).toHaveLength(1)
  })
  it('should render 1 TouchableOpacity', () => {
    wrapper = shallow(<ActivityFilter />)
    expect(wrapper.find(TouchableWithoutFeedback)).toHaveLength(1)
  })
  it('should render 1 Image', () => {
    wrapper = shallow(<ActivityFilter />)
    expect(wrapper.find(Image)).toHaveLength(1)
  })
  it('should render 1 SmallButton', () => {
    wrapper = shallow(<ActivityFilter />)
    expect(wrapper.find(SmallButton)).toHaveLength(1)
  })
})
