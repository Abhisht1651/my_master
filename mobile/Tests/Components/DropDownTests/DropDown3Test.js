import { shallow } from 'enzyme'
import React from 'react'
import { renderHook, act } from '@testing-library/react-hooks'

import useHooks from '../../../App/Components/Dropdowns/DropDown3Hooks'
import DropDown3 from '../../../App/Components/Dropdowns/DropDown3'

describe('DropDown3', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<DropDown3 />)
      expect(component).toMatchSnapshot()
    })
  })
})

describe('DropDown3', () => {
  it('should hide/show the dropdown', () => {
    const { result } = renderHook(useHooks)
    const val = result.current.hidden
    act(() => {
      result.current.toggleHandler()
    })
    expect(result.current.hidden).toBe(!val)
  })
})
