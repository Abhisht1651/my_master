import { shallow } from 'enzyme'
import React from 'react'

// import { TouchableOpacity } from 'react-native'
import SmallCheckbox from '../../../App/Components/CheckboxRadioAndToggle/SmallCheckbox'

describe('SmallCheckbox', () => {
  it('should match to snapshot', () => {
    const component = shallow(<SmallCheckbox />)
    expect(component).toMatchSnapshot()
  })
})
