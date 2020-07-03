import { TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { shallow } from 'enzyme'

import { MediumButton } from '../../../App/Components/Buttons/MediumButton'

// Test for MediumButton (snapshot and props)

describe('MediumButton', () => {
  it('MediumButton component renders correctly', () => {
    const tree = shallow(<MediumButton />)
    expect(tree).toMatchSnapshot()
  })

  it('MediumButton onPress', () => {
    const onPressed = jest.fn()
    const wrapper = shallow(<MediumButton onPress={onPressed} />)
    wrapper.find(TouchableWithoutFeedback).props().onPress()
    expect(onPressed.mock.calls.length).toBe(1)
  })
})
