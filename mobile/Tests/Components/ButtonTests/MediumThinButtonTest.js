import { TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { shallow } from 'enzyme'

import { MediumThinButton } from '../../../App/Components/Buttons/MediumThinButton'

// Test for MediumThinButton (snapshot and props)

describe('MediumThinButton', () => {
  it('MediumThinButton component renders correctly', () => {
    const tree = shallow(<MediumThinButton />)
    expect(tree).toMatchSnapshot()
  })

  it('MediumThinButton disabled', () => {
    const wrapper = shallow(<MediumThinButton disabled />).props()
    expect(wrapper.children.props.disabled).toEqual(true)
  })

  it('MediumThinButton onPress', () => {
    const onPressed = jest.fn()
    const wrapper = shallow(<MediumThinButton onPress={onPressed} />)
    wrapper.find(TouchableWithoutFeedback).props().onPress()
    expect(onPressed.mock.calls.length).toBe(1)
  })

  it('MediumThinButton disabled onPress', () => {
    const onPressed = jest.fn()
    const wrapper = shallow(<MediumThinButton disabled onPress={onPressed} />)
    wrapper.find(TouchableWithoutFeedback).simulate('click')
    expect(onPressed.mock.calls.length).toBe(0)
  })
})
