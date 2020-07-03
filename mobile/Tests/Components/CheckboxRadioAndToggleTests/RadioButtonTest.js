import { shallow } from 'enzyme'
import React from 'react'

// import { TouchableOpacity } from 'react-native'
import RadioButton from '../../../App/Components/CheckboxRadioAndToggle/RadioButton'

describe('RadioButton', () => {
  it('should match to snapshot', () => {
    const component = shallow(<RadioButton />)
    expect(component).toMatchSnapshot()
  })
})
