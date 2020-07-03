import { shallow } from 'enzyme'
import React from 'react'

import Toggle from '../../../App/Components/CheckboxRadioAndToggle/Toggle'

describe('Toggle', () => {
  it('should match to snapshot', () => {
    const component = shallow(<Toggle />)
    expect(component).toMatchSnapshot()
  })
})
