import { TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { shallow } from 'enzyme'

import { X2SButton } from '../../../App/Components/Buttons/X2SButton'

// Test for X2SButton (snapshot and props)

describe('X2SButton', () => {
  it('X2SButton component renders correctly', () => {
    const tree = shallow(<X2SButton />)
    expect(tree).toMatchSnapshot()
  })

  it('X2SButton disabled', () => {
    const wrapper = shallow(<X2SButton disabled />).props()
    expect(wrapper.children.props.disabled).toEqual(true)
  })

  it('X2SButton onPress', () => {
    const onPressed = jest.fn()
    const wrapper = shallow(<X2SButton onPress={onPressed} />)
    wrapper.find(TouchableWithoutFeedback).props().onPress()
    expect(onPressed.mock.calls.length).toBe(1)
  })

  it('X2SButton disabled onPress', () => {
    const onPressed = jest.fn()
    const wrapper = shallow(<X2SButton disabled onPress={onPressed} />)
    wrapper.find(TouchableWithoutFeedback).simulate('click')
    expect(onPressed.mock.calls.length).toBe(0)
  })
})
