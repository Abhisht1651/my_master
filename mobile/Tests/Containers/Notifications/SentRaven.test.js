// @flow
import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import SentRaven from '../../../App/Components/Notifications/SentRaven'

describe('SentRaven', () => {
  it('SentRaven component renders correctly', () => {
    const tree = shallow(<SentRaven />)
    expect(tree).toMatchSnapshot()
  })

  it('should render the Text Component', () => {
    const wrapper = shallow(<SentRaven />)
    expect(wrapper.find('Text')).toHaveLength(3)
  })

  it('should render the Image Component', () => {
    const wrapper = shallow(<SentRaven />)
    expect(wrapper.find('Image')).toHaveLength(2)
  })

  it('should render the Image Component', () => {
    const wrapper = shallow(<SentRaven />)
    expect(wrapper.find('ImageBackground')).toHaveLength(1)
  })
})
