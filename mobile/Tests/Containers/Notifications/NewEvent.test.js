// @flow
import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import NewEvent from '../../../App/Components/Notifications/NewEvent'

describe('NewEvent', () => {
  it('NewEvent component renders correctly', () => {
    const tree = shallow(<NewEvent />)
    expect(tree).toMatchSnapshot()
  })

  it('should render the Text Component', () => {
    const wrapper = shallow(<NewEvent />)
    expect(wrapper.find('Text')).toHaveLength(4)
  })

  it('should render the Image Component', () => {
    const wrapper = shallow(<NewEvent />)
    expect(wrapper.find('Image')).toHaveLength(2)
  })
})
