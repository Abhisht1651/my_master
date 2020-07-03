// @flow
import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import Blocked from '../../../../App/Containers/Settings/Privacy/Blocked'

describe('Blocked', () => {
  it('Blocked component renders correctly', () => {
    const tree = shallow(<Blocked />)
    expect(tree).toMatchSnapshot()
  })

  it('should render the Text Component', () => {
    const wrapper = shallow(<Blocked />)
    expect(wrapper.find('Text')).toHaveLength(9)
  })

  it('should render the Image Component', () => {
    const wrapper = shallow(<Blocked />)
    expect(wrapper.find('Image')).toHaveLength(5)
  })
})
