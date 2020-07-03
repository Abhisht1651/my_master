import { TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { shallow } from 'enzyme'

import { MediumThinnerButton } from '../../../App/Components/Buttons/MediumThinnerButton'

// Test for MediumThinnerButton (snapshot and props)

describe('MediumThinnerButton', () => {
  it('MediumThinnerButton component renders correctly', () => {
    const tree = shallow(<MediumThinnerButton />)
    expect(tree).toMatchSnapshot()
  })

  it('MediumThinnerButton onPress', () => {
    const onPressed = jest.fn()
    const wrapper = shallow(<MediumThinnerButton onPress={onPressed} />)
    wrapper.find(TouchableWithoutFeedback).props().onPress()
    expect(onPressed.mock.calls.length).toBe(1)
  })
})
