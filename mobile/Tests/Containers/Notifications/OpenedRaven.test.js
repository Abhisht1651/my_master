// @flow
import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import OpenedRaven from '../../../App/Components/Notifications/OpenedRaven'

describe('OpenedRaven', () => {
  it('OpenedRaven component renders correctly', () => {
    const tree = shallow(<OpenedRaven />)
    expect(tree).toMatchSnapshot()
  })

  it('should render the Text Component', () => {
    const wrapper = shallow(<OpenedRaven />)
    expect(wrapper.find('Text')).toHaveLength(3)
  })

  it('should render the Image Component', () => {
    const wrapper = shallow(<OpenedRaven />)
    expect(wrapper.find('Image')).toHaveLength(2)
  })

  it('should render the Image Component', () => {
    const wrapper = shallow(<OpenedRaven />)
    expect(wrapper.find('ImageBackground')).toHaveLength(1)
  })
})
