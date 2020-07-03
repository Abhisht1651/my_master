import { shallow } from 'enzyme'
import React from 'react'

import { TouchableOpacity } from 'react-native'
import ListOfFriends from '../../App/Components/ListOfFriends/ListOfFriends'

describe('ListOfFriends', () => {
  it('should match to snapshot', () => {
    const component = shallow(<ListOfFriends />)
    expect(component).toMatchSnapshot()
  })

  it('should trigger function onPress', () => {
    const onPressed = jest.fn()
    const wrapper = shallow(<ListOfFriends onPress={onPressed} />)
    wrapper.find(TouchableOpacity).props().onPress()
    expect(onPressed.mock.calls.length).toBe(1)
  })
})
