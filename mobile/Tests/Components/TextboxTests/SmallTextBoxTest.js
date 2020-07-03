import { shallow } from 'enzyme'
import React from 'react'

import { TextInput } from 'react-native'
import SmallTextBox from '../../../App/Components/Textbox/SmallTextBox'

describe('SmallTextBox', () => {
  it('should match to snapshot', () => {
    const component = shallow(<SmallTextBox />)
    expect(component).toMatchSnapshot()
  })
  it('should render the Text Component', () => {
    const wrapper = shallow(<SmallTextBox />)
    expect(wrapper.find('Text')).toHaveLength(1)
  })

  it('should change store when text is entered', () => {
    const component = shallow(<SmallTextBox />)
    component.find(TextInput).prop('onChangeText')('Green fox jumps over the wall')
    expect(component.find(TextInput).prop('value')).toEqual('Green fox jumps over the wall')
  })
})
