import { TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { shallow } from 'enzyme'

import { LargeThinButton } from '../../../App/Components/Buttons/LargeThinButton'

// Test for LargeThinButton (snapshot and props)

describe('LargeThinButton', () => {
  it('LargeThinButton component renders correctly', () => {
    const tree = shallow(<LargeThinButton />)
    expect(tree).toMatchSnapshot()
  })

  it('LargeThinButton disabled', () => {
    const wrapper = shallow(<LargeThinButton disabled />).props()
    expect(wrapper.children.props.disabled).toEqual(true)
  })

  it('LargeThinButton onPress', () => {
    const onPressed = jest.fn()
    const wrapper = shallow(<LargeThinButton onPress={onPressed} />)
    wrapper.find(TouchableWithoutFeedback).props().onPress()
    expect(onPressed.mock.calls.length).toBe(1)
  })

  it('LargeThinButton disabled onPress', () => {
    const onPressed = jest.fn()
    const wrapper = shallow(<LargeThinButton disabled onPress={onPressed} />)
    wrapper.find(TouchableWithoutFeedback).simulate('click')
    expect(onPressed.mock.calls.length).toBe(0)
  })
})
