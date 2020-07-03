import React from 'react'
import { shallow } from 'enzyme'
import { TextInput } from 'react-native'
import TextInputForPassword from '../../../App/Components/TextInput/TextInputForPassword'

describe('TextInputForPassword', () => {
  it('TextInputForPassword  renders correctly', () => {
    const wrapper = shallow(<TextInputForPassword />)
    expect(wrapper).toMatchSnapshot()
  })
})

describe('TextInputForPassword ', () => {
  it('should have prop onChangeText', () => {
    const wrapper = shallow(<TextInputForPassword />)
    expect(wrapper.find(TextInput).prop('onChangeText')).toBeTruthy()
  })
})
