// @flow
import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import SignOut from '../../../../App/Containers/Settings/Account/SignOut'

describe('SignOut', () => {
  it('SignOut component renders correctly', () => {
    const tree = shallow(<SignOut />)
    expect(tree).toMatchSnapshot()
  })

  it('should render the Text Component', () => {
    const wrapper = shallow(<SignOut />)
    expect(wrapper.find('Text')).toHaveLength(3)
  })

  it('should render the Image Component', () => {
    const wrapper = shallow(<SignOut />)
    expect(wrapper.find('Image')).toHaveLength(1)
  })
})
