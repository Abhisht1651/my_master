import React from 'react'
import { shallow } from 'enzyme'
import { TouchableOpacity, Text } from 'react-native'
import ReportUser from '../../../App/Containers/ChatScreens/ReportUser'

describe('ReportUser', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<ReportUser />) // no compile-time error
  })
  it('ReportUser component renders correctly', () => {
    const wrapper = shallow(<ReportUser />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render 5 TouchableOpacity', () => {
    expect(wrapper.find(TouchableOpacity)).toHaveLength(5)
  })
  it('should render 6 Text', () => {
    expect(wrapper.find(Text)).toHaveLength(6)
  })
})
