import { TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { shallow } from 'enzyme'

import { DefaultButton } from '../../../App/Components/Buttons/DefaultButton'

// Test for DefaultButton (snapshot and props)

describe('DefaultButton', () => {
  it('DefaultButton component renders correctly', () => {
    const tree = shallow(<DefaultButton />)
    expect(tree).toMatchSnapshot()
  })

  it('DefaultButton disabled', () => {
    const wrapper = shallow(<DefaultButton disabled />).props()
    expect(wrapper.children.props.disabled).toEqual(true)
  })

  it('DefaultButton onPress', () => {
    const onPressed = jest.fn()
    const wrapper = shallow(<DefaultButton onPress={onPressed} />)
    wrapper.find(TouchableWithoutFeedback).props().onPress()
    expect(onPressed.mock.calls.length).toBe(1)
  })

  it('DefaultButton disabled onPress', () => {
    const onPressed = jest.fn()
    const wrapper = shallow(<DefaultButton disabled onPress={onPressed} />)
    wrapper.find(TouchableWithoutFeedback).simulate('click')
    expect(onPressed.mock.calls.length).toBe(0)
  })
})
