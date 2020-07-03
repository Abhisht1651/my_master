// @flow
import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import ShortPollJoin from '../../App/Components/ShortPollJoin'

describe('ShortPollJoin', () => {
  it('ShortPollJoin component renders correctly', () => {
    const wrapper = shallow(<ShortPollJoin />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render the Text Component', () => {
    const wrapper = shallow(<ShortPollJoin />)
    expect(wrapper.find('Text')).toHaveLength(4)
  })
  it('should render the Image Component', () => {
    const wrapper = shallow(<ShortPollJoin />)
    expect(wrapper.find('Image')).toHaveLength(4)
  })
})
