// @flow
import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import Deactivate from '../../../../App/Containers/Settings/Account/Deactivate'

describe('Deactivate', () => {
  it('Deactivate component renders correctly', () => {
    const tree = shallow(<Deactivate />)
    expect(tree).toMatchSnapshot()
  })

  it('should render the Text Component', () => {
    const wrapper = shallow(<Deactivate />)
    expect(wrapper.find('Text')).toHaveLength(3)
  })

  it('should render the Image Component', () => {
    const wrapper = shallow(<Deactivate />)
    expect(wrapper.find('Image')).toHaveLength(1)
  })
})
