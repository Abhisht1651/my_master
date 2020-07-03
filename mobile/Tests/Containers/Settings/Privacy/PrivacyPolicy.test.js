// @flow
import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import PrivacyPolicy from '../../../../App/Containers/Settings/Privacy/PrivacyPolicy'

describe('PrivacyPolicy', () => {
  it('PrivacyPolicy component renders correctly', () => {
    const tree = shallow(<PrivacyPolicy />)
    expect(tree).toMatchSnapshot()
  })

  it('should render the Text Component', () => {
    const wrapper = shallow(<PrivacyPolicy />)
    expect(wrapper.find('Text')).toHaveLength(5)
  })

  it('should render the Image Component', () => {
    const wrapper = shallow(<PrivacyPolicy />)
    expect(wrapper.find('Image')).toHaveLength(1)
  })
})
