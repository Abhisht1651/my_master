import { shallow } from 'enzyme'
import React from 'react'
import { renderHook, act } from '@testing-library/react-hooks'

import useHooks from '../../../App/Components/Dropdowns/DropDown2Hooks'
import DropDown2 from '../../../App/Components/Dropdowns/DropDown2'

describe('DropDown2', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<DropDown2 />)
      expect(component).toMatchSnapshot()
    })
  })
})

describe('DropDown2', () => {
  it('should hide/show the dropdown', () => {
    const { result } = renderHook(useHooks)
    const val = result.current.hidden
    act(() => {
      result.current.toggleHandler()
    })
    expect(result.current.hidden).toBe(!val)
  })

  it('should select/unselect the option', () => {
    const { result } = renderHook(useHooks)
    act(() => {
      result.current.clickHandler(1)
    })
    expect(result.current.selected).toBe(2)

  })
})
