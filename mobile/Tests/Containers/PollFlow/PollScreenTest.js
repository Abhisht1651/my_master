// @flow
import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import PollScreen from '../../../App/Containers/Poll/PollScreen'
import CommentBar from '../../../App/Components/Commentbars/Commentbar2'
import Bubbles from '../../../App/Components/Icons/Bubbles'
import DropDown from '../../../App/Components/Dropdowns/DropDown2'

describe('PollScreen', () => {
  it('should render the component itself correctly', () => {
    const wrapper = shallow(<PollScreen />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render the Text Component', () => {
    const wrapper = shallow(<PollScreen />)
    expect(wrapper.find('Text')).toHaveLength(18)
  })
  it('should render the Image Component', () => {
    const wrapper = shallow(<PollScreen />)
    expect(wrapper.find('Image')).toHaveLength(12)
  })
  it('should render the LargeThinButton Component', () => {
    const wrapper = shallow(<PollScreen />)
    expect(wrapper.find('LargeThinButton')).toHaveLength(1)
  })
  it('should render the CommentBar Component', () => {
    const wrapper = shallow(<PollScreen />)
    expect(wrapper.find(CommentBar)).toHaveLength(1)
  })
  it('should render the Bubbles Component', () => {
    const wrapper = shallow(<PollScreen />)
    expect(wrapper.find(Bubbles)).toHaveLength(1)
  })
  it('should render the DropDown Component', () => {
    const wrapper = shallow(<PollScreen />)
    expect(wrapper.find(DropDown)).toHaveLength(2)
  })
})
