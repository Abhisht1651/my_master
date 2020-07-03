import { shallow } from 'enzyme'
import React from 'react'

import Checkbox from '../../../App/Components/CheckboxRadioAndToggle/Checkbox'

describe('Checkbox', () => {
  it('rendering should match to snapshot', () => {
    const component = shallow(<Checkbox />)
    expect(component).toMatchSnapshot()
  })
})
