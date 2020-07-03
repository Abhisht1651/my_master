/* eslint-disable prettier/prettier */
import React from 'react'
import { shallow } from 'enzyme'
import { Image, TouchableWithoutFeedback } from 'react-native'
import { BottomNav } from '../../App/Components/BottomNav'

// Test for BottomNav (snapshot and props)

describe('BottomNav', () => {
  it('BottomNav component renders correctly', () => {
    const tree = shallow(<BottomNav />)
    expect(tree).toMatchSnapshot()
  })
  it('render 5 TouchableWithoutFeedback', () => {
    const wrapper = shallow(<BottomNav />)
    expect(wrapper.find(TouchableWithoutFeedback)).toHaveLength(5)
  })
  it('render 5 Image', () => {
    const wrapper = shallow(<BottomNav />)
    expect(wrapper.find(Image)).toHaveLength(5)
  })
})
