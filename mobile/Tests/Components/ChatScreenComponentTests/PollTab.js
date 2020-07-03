import React from 'react'
import { shallow } from 'enzyme'
import { FlatList } from 'react-native'
import PollTab from '../../../App/Components/ChatScreenComponents/PollTab'

describe('MessageScreen', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<PollTab />)
  })
  it('MediaTab component renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('should render 1 flatlist', () => {
    expect(wrapper.find(FlatList)).toHaveLength(1)
  })
})
