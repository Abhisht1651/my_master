import { shallow } from 'enzyme'
import React from 'react'
import { TextInput } from 'react-native'
import MediumTextBox from '../../../App/Components/Textbox/MediumTextBox'

describe('LargeTextBox', () => {
  it('should render the component without crashing', () => {
    const wrapper = shallow(<MediumTextBox />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render the Text Component', () => {
    const wrapper = shallow(<MediumTextBox />)
    expect(wrapper.find('Text')).toHaveLength(1)
  })

  it('should change store when text is entered', () => {
    const component = shallow(<MediumTextBox />)
    component.find(TextInput).prop('onChangeText')('Green fox jumps over the wall')
    expect(component.find(TextInput).prop('value')).toEqual('Green fox jumps over the wall')
  })
})
