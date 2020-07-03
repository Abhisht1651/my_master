// @flow
import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import PopularPoll from '../../App/Components/PopularPoll'

describe('PopularPoll', () => {
  it('PopularPoll component renders correctly', () => {
    const wrapper = shallow(<PopularPoll />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render the Text Component', () => {
    const wrapper = shallow(<PopularPoll />)
    expect(wrapper.find('Text')).toHaveLength(11)
  })
  it('should render the Image Component', () => {
    const wrapper = shallow(<PopularPoll />)
    expect(wrapper.find('Image')).toHaveLength(5)
  })
})
