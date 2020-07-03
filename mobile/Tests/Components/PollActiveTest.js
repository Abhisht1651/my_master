// @flow
import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import PollActive from '../../App/Components/PollActive'

describe('RelatedPoll', () => {
  it('PollActive component renders correctly', () => {
    const wrapper = shallow(<PollActive />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render the Text Component', () => {
    const wrapper = shallow(<PollActive />)
    expect(wrapper.find('Text')).toHaveLength(9)
  })
  it('should render the Image Component', () => {
    const wrapper = shallow(<PollActive />)
    expect(wrapper.find('Image')).toHaveLength(8)
  })
})
