// @flow
import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import PrivacySettings from '../../../App/Containers/Settings/PrivacySettings'

describe('PrivacySettings', () => {
  it('PrivacySettings component renders correctly', () => {
    const tree = shallow(<PrivacySettings />)
    expect(tree).toMatchSnapshot()
  })

  it('should render the Text Component', () => {
    const wrapper = shallow(<PrivacySettings />)
    expect(wrapper.find('Text')).toHaveLength(3)
  })

  it('should render the Image Component', () => {
    const wrapper = shallow(<PrivacySettings />)
    expect(wrapper.find('Image')).toHaveLength(3)
  })
})
