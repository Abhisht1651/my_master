// @flow
import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import Settings from '../../../App/Containers/Settings/Settings'

describe('Settings', () => {
  it('Settings component renders correctly', () => {
    const tree = shallow(<Settings />)
    expect(tree).toMatchSnapshot()
  })

  it('should render the Text Component', () => {
    const wrapper = shallow(<Settings />)
    expect(wrapper.find('Text')).toHaveLength(5)
  })

  it('should render the Image Component', () => {
    const wrapper = shallow(<Settings />)
    expect(wrapper.find('Image')).toHaveLength(5)
  })
})
