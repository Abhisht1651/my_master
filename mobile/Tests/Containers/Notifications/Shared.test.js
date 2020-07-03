// @flow
import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import Shared from '../../../App/Components/Notifications/Shared'

describe('Shared', () => {
  it('Shared component renders correctly', () => {
    const tree = shallow(<Shared />)
    expect(tree).toMatchSnapshot()
  })

  it('should render the Text Component', () => {
    const wrapper = shallow(<Shared />)
    expect(wrapper.find('Text')).toHaveLength(4)
  })

  it('should render the Image Component', () => {
    const wrapper = shallow(<Shared />)
    expect(wrapper.find('Image')).toHaveLength(2)
  })

  it('should render the Image Component', () => {
    const wrapper = shallow(<Shared />)
    expect(wrapper.find('ImageBackground')).toHaveLength(0)
  })
})
