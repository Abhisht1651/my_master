import { TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { shallow } from 'enzyme'

import { SmallButton } from '../../../App/Components/Buttons/SmallButton'

// Test for SmallButton (snapshot and props)

describe('SmallButton', () => {
  it('SmallButton component renders correctly', () => {
    const tree = shallow(<SmallButton />)
    expect(tree).toMatchSnapshot()
  })

  it('SmallButton onPress', () => {
    const onPressed = jest.fn()
    const wrapper = shallow(<SmallButton onPress={onPressed} />)
    wrapper.find(TouchableWithoutFeedback).props().onPress()
    expect(onPressed.mock.calls.length).toBe(1)
  })
})
