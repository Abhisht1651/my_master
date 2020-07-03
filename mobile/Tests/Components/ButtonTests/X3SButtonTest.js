import { TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import { X3SButton } from '../../../App/Components/Buttons/X3SButton'

// Test for X3SButton (snapshot and props)

describe('X3SButton', () => {
  it('X3SButton component renders correctly', () => {
    const tree = shallow(<X3SButton />)
    expect(tree).toMatchSnapshot()
  })

  it('X3SButton onPress', () => {
    const onPressed = jest.fn()
    const wrapper = shallow(<X3SButton onPress={onPressed} />)
    wrapper.find(TouchableWithoutFeedback).props().onPress()
    expect(onPressed.mock.calls.length).toBe(1)
  })
})
