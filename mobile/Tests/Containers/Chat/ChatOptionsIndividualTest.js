import React from 'react'
import { shallow } from 'enzyme'
import { FlatList, TouchableOpacity } from 'react-native'
import ChatOptionsIndividual from '../../../App/Containers/ChatScreens/ChatOptionsIndividual'

describe('ChatOptions', () => {
  it('ChatOptions component renders correctly', () => {
    const wrapper = shallow(<ChatOptionsIndividual route={{ params: { title: ' ' } }} />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render 1 flatlist', () => {
    const wrapper = shallow(<ChatOptionsIndividual route={{ params: { title: ' ' } }} />)
    expect(wrapper.find(FlatList)).toHaveLength(1)
  })
  it('should render 1 TouchableOpacity', () => {
    const item = {
      id: '1'
    }
    const wrapper = shallow(<ChatOptionsIndividual route={{ params: { title: ' ' } }} />)
    const flatlist = wrapper.find(FlatList)
    const element = flatlist.renderProp('renderItem')({ item })
    expect(element.find(TouchableOpacity)).toHaveLength(1)
  })
})
