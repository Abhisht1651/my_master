// @flow
import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import RelatedPollScreen from '../../../App/Containers/Poll/RelatedPolls'
import RelatedPoll from '../../../App/Components/RelatedPoll'

describe('RelatedPolls', () => {
  it('should render the component itself correctly', () => {
    const wrapper = shallow(<RelatedPollScreen />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render the Text Component', () => {
    const wrapper = shallow(<RelatedPollScreen />)
    expect(wrapper.find('Text')).toHaveLength(1)
  })
  it('should render the Image Component', () => {
    const wrapper = shallow(<RelatedPollScreen />)
    expect(wrapper.find('Image')).toHaveLength(1)
  })
  it('should render the RelatedPoll Component', () => {
    const wrapper = shallow(<RelatedPollScreen />)
    expect(wrapper.find(RelatedPoll)).toHaveLength(3)
  })
})
