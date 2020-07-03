// @flow
import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import RelatedPoll from '../../App/Components/RelatedPoll'

describe('RelatedPoll', () => {
  it('RelatedPoll component renders correctly', () => {
    const wrapper = shallow(<RelatedPoll />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render the Text Component', () => {
    const wrapper = shallow(<RelatedPoll />)
    expect(wrapper.find('Text')).toHaveLength(7)
  })
  it('should render the Image Component', () => {
    const wrapper = shallow(<RelatedPoll />)
    expect(wrapper.find('Image')).toHaveLength(4)
  })
})
