import { TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { shallow } from 'enzyme'

import { XSButton } from '../../../App/Components/Buttons/XSButton'

// Test for XSButton (snapshot and props)

describe('XSButton', () => {
  it('XSButton component renders correctly', () => {
    const tree = shallow(<XSButton />)
    expect(tree).toMatchSnapshot()
  })

  it('XSButton disabled', () => {
    const wrapper = shallow(<XSButton disabled />).props()
    expect(wrapper.children.props.disabled).toEqual(true)
  })

  it('XSButton onPress', () => {
    const onPressed = jest.fn()
    const wrapper = shallow(<XSButton onPress={onPressed} />)
    wrapper.find(TouchableWithoutFeedback).props().onPress()
    expect(onPressed.mock.calls.length).toBe(1)
  })

  it('XSButton disabled onPress', () => {
    const onPressed = jest.fn()
    const wrapper = shallow(<XSButton disabled onPress={onPressed} />)
    wrapper.find(TouchableWithoutFeedback).simulate('click')
    expect(onPressed.mock.calls.length).toBe(0)
  })
})
