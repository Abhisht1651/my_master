// @flow
import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import Home from '../../../App/Containers/StoryLine/Home'
import Bubbles from '../../../App/Components/Icons/Bubbles'
import DropDown from '../../../App/Components/Dropdowns/DropDown2'

describe('Home Screen', () => {
  it('should render the component itself correctly', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render the Text Component', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.find('Text')).toHaveLength(20)
  })
  it('should render the Image Component', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.find('Image')).toHaveLength(6)
  })
  it('should render the DefaultButton Component', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.find('DefaultButton')).toHaveLength(1)
  })
  it('should render the Bubbles Component', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.find(Bubbles)).toHaveLength(1)
  })
  it('should render the DropDown Component', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.find(DropDown)).toHaveLength(1)
  })
})
