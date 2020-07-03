// @flow
import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import NewzeraSettings from '../../../App/Containers/Settings/NewzeraSettings'

describe('NewzeraSettings', () => {
  it('NewzeraSettings component renders correctly', () => {
    const tree = shallow(<NewzeraSettings />)
    expect(tree).toMatchSnapshot()
  })

  it('should render the Text Component', () => {
    const wrapper = shallow(<NewzeraSettings />)
    expect(wrapper.find('Text')).toHaveLength(5)
  })

  it('should render the Image Component', () => {
    const wrapper = shallow(<NewzeraSettings />)
    expect(wrapper.find('Image')).toHaveLength(5)
  })
})
