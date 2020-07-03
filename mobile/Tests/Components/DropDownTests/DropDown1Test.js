import { shallow } from 'enzyme'
import React from 'react'

import { renderHook, act } from '@testing-library/react-hooks'
import DropDown1 from '../../../App/Components/Dropdowns/DropDown1'
import useHooks from '../../../App/Components/Dropdowns/DropDown1Hooks'

describe('DropDown1', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<DropDown1 />)
      expect(component).toMatchSnapshot()
    })
  })
})
describe('DropDown1', () => {
  const { result } = renderHook(useHooks)
  act(() => {
    result.current.toggleListHandler()
  })
  expect(result.current.hidden).toBe(false)
})
