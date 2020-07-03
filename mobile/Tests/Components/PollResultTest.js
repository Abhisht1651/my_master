// @flow
import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import PollResult from '../../App/Components/PollResult'

describe('PopularPoll', () => {
  it('PopularPoll component renders correctly', () => {
    const wrapper = shallow(<PollResult />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render the Text Component', () => {
    const wrapper = shallow(<PollResult />)
    expect(wrapper.find('Text')).toHaveLength(13)
  })
  it('should render the Image Component', () => {
    const wrapper = shallow(<PollResult />)
    expect(wrapper.find('Image')).toHaveLength(9)
  })
})
