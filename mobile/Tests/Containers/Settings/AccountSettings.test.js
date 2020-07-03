// @flow
import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import AccountSettings from '../../../App/Containers/Settings/AccountSettings'

describe('AccountSettings', () => {
  it('AccountSettings component renders correctly', () => {
    const tree = shallow(<AccountSettings />)
    expect(tree).toMatchSnapshot()
  })

  it('should render the Text Component', () => {
    const wrapper = shallow(<AccountSettings />)
    expect(wrapper.find('Text')).toHaveLength(6)
  })

  it('should render the Image Component', () => {
    const wrapper = shallow(<AccountSettings />)
    expect(wrapper.find('Image')).toHaveLength(6)
  })
})
