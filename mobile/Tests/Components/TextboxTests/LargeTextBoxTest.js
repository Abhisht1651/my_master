import { shallow } from 'enzyme'
import React from 'react'
import { TextInput } from 'react-native'
import LargeTextBox from '../../../App/Components/Textbox/LargeTextBox'

describe('LargeTextBox', () => {
  it('should match to snapshot', () => {
    const component = shallow(<LargeTextBox />)
    expect(component).toMatchSnapshot()
  })
  it('should store the text when text is entered', () => {
    const component = shallow(<LargeTextBox />)
    component.find(TextInput).prop('onChangeText')('Green fox jumps over the wall')
    expect(component.find(TextInput).prop('value')).toEqual('Green fox jumps over the wall')
  })
})
