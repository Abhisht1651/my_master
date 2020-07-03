// @flow
import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import ShortPoll from '../../App/Components/ShortPoll'

describe('ShortPoll', () => {
  it('ShortPoll component renders correctly', () => {
    const wrapper = shallow(<ShortPoll />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render the Text Component', () => {
    const wrapper = shallow(<ShortPoll />)
    expect(wrapper.find('Text')).toHaveLength(3)
  })
  it('should render the Image Component', () => {
    const wrapper = shallow(<ShortPoll />)
    expect(wrapper.find('Image')).toHaveLength(4)
  })
})
