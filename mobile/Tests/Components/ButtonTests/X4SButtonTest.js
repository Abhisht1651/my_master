import { TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { shallow } from 'enzyme'

import { X4SButton } from '../../../App/Components/Buttons/X4SButton'

// Test for X4SButton (snapshot and props)

describe('X4SButton', () => {
  it('X4SButton component renders correctly', () => {
    const tree = shallow(<X4SButton />)
    expect(tree).toMatchSnapshot()
  })

  it('X4SButton disabled', () => {
    const wrapper = shallow(<X4SButton disabled />).props()
    expect(wrapper.children.props.disabled).toEqual(true)
  })

  it('X4SButton onPress', () => {
    const onPressed = jest.fn()
    const wrapper = shallow(<X4SButton onPress={onPressed} />)
    wrapper.find(TouchableWithoutFeedback).props().onPress()
    expect(onPressed.mock.calls.length).toBe(1)
  })

  it('X4SButton disabled onPress', () => {
    const onPressed = jest.fn()
    const wrapper = shallow(<X4SButton disabled onPress={onPressed} />)
    wrapper.find(TouchableWithoutFeedback).simulate('click')
    expect(onPressed.mock.calls.length).toBe(0)
  })
})
