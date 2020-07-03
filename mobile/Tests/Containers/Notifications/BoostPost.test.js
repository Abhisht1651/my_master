// @flow

import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import BoostPost from '../../../App/Components/Notifications/BoostPost'

describe('BoostPost', () => {
  it('BoostPost component renders correctly', () => {
    const tree = shallow(<BoostPost />)
    expect(tree).toMatchSnapshot()
  })

  it('should render the Text Component', () => {
    const wrapper = shallow(<BoostPost />)
    expect(wrapper.find('Text')).toHaveLength(4)
  })

  it('should render the Image Component', () => {
    const wrapper = shallow(<BoostPost />)
    expect(wrapper.find('Image')).toHaveLength(2)
  })
})
