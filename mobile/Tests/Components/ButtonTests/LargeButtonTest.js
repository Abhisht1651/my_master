import { TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { shallow } from 'enzyme'

import { LargeButton } from '../../../App/Components/Buttons/LargeButton'

// Test for LargeButton (snapshot and props)

describe('LargeButton', () => {
  it('LargeButton component renders correctly', () => {
    const tree = shallow(<LargeButton />)
    expect(tree).toMatchSnapshot()
  })

  it('LargeButton disabled', () => {
    const wrapper = shallow(<LargeButton disabled />).props()
    expect(wrapper.children.props.disabled).toEqual(true)
  })

  it('LargeButton onPress', () => {
    const onPressed = jest.fn()
    const wrapper = shallow(<LargeButton onPress={onPressed} />)
    wrapper.find(TouchableWithoutFeedback).props().onPress()
    expect(onPressed.mock.calls.length).toBe(1)
  })

  it('LargeButton disabled onPress', () => {
    const onPressed = jest.fn()
    const wrapper = shallow(<LargeButton disabled onPress={onPressed} />)
    wrapper.find(TouchableWithoutFeedback).simulate('click')
    expect(onPressed.mock.calls.length).toBe(0)
  })
})
