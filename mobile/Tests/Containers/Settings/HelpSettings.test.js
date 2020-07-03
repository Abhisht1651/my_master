// @flow
import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import HelpSettings from '../../../App/Containers/Settings/HelpSettings'

describe('HelpSettings', () => {
  it('HelpSettings component renders correctly', () => {
    const tree = shallow(<HelpSettings />)
    expect(tree).toMatchSnapshot()
  })

  it('should render the Text Component', () => {
    const wrapper = shallow(<HelpSettings />)
    expect(wrapper.find('Text')).toHaveLength(4)
  })

  it('should render the Image Component', () => {
    const wrapper = shallow(<HelpSettings />)
    expect(wrapper.find('Image')).toHaveLength(4)
  })
})
