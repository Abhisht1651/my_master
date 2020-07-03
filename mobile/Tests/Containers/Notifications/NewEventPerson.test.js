// @flow
import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import NewEventPerson from '../../../App/Components/Notifications/NewEventPerson'

describe('NewEventPerson', () => {
  it('NewEventPerson component renders correctly', () => {
    const tree = shallow(<NewEventPerson />)
    expect(tree).toMatchSnapshot()
  })

  it('should render the Text Component', () => {
    const wrapper = shallow(<NewEventPerson />)
    expect(wrapper.find('Text')).toHaveLength(4)
  })

  it('should render the Image Component', () => {
    const wrapper = shallow(<NewEventPerson />)
    expect(wrapper.find('Image')).toHaveLength(2)
  })
})
