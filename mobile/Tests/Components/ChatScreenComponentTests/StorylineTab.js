import React from 'react'
import { shallow } from 'enzyme'
import { FlatList } from 'react-native'
import StorylineTab from '../../../App/Components/ChatScreenComponents/StorylineTab'

describe('MessageScreen', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<StorylineTab />)
  })
  it('MediaTab component renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('should render 1 flatlist', () => {
    expect(wrapper.find(FlatList)).toHaveLength(1)
  })
})
