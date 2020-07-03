import React from 'react'
import { shallow } from 'enzyme'
import { TextInput } from 'react-native'
import TextInputComponent from '../../../App/Components/TextInput/TextInputComponent'

describe('TextInputComponent', () => {
  it('TextInputComponent  renders correctly', () => {
    const wrapper = shallow(<TextInputComponent />)
    expect(wrapper).toMatchSnapshot()
  })
})

describe('TextInputComponent ', () => {
  it('should have prop onChangeText', () => {
    const wrapper = shallow(<TextInputComponent />)
    expect(wrapper.find(TextInput).prop('onChangeText')).toBeTruthy()
  })

  it('should change value after entering text', () => {
    const wrapper = shallow(<TextInputComponent />)
    wrapper.find(TextInput).prop('onChangeText')('Random')
    expect(wrapper.find(TextInput).prop('value')).toEqual('Random')
  })
})
