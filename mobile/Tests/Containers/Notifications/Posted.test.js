// @flow
import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import Posted from '../../../App/Components/Notifications/Posted'

describe('Posted', () => {
  it('Posted component renders correctly', () => {
    const tree = shallow(<Posted />)
    expect(tree).toMatchSnapshot()
  })

  it('should render the Text Component', () => {
    const wrapper = shallow(<Posted />)
    expect(wrapper.find('Text')).toHaveLength(4)
  })

  it('should render the Image Component', () => {
    const wrapper = shallow(<Posted />)
    expect(wrapper.find('Image')).toHaveLength(2)
  })
})
