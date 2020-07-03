import { shallow } from 'enzyme'
import React from 'react'
import { renderHook, act } from '@testing-library/react-hooks'
import CategoryFilterCard from '../../../App/Components/PopUps/CategoryFilterCard'

import useHooks from '../../../App/Components/PopUps/CategoryFilterHooks'

describe('CategoryFilterCard', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<CategoryFilterCard />)
      expect(component).toMatchSnapshot()
    })
  })
})

describe('CategoryFilter Popup', () => {
  it('item selected should increase /decrese if any item is selected', () => {
    const { result } = renderHook(useHooks)
    const val1 = result.current.numberOfItemsSelected
    const val2 = result.current.checkedWorld
    if (val2 === true) {
      act(() => {
        result.current.clickHandler1()
      })
      expect(result.current.numberOfItemsSelected).toBe(val1 - 1)
    } else {
      act(() => {
        result.current.clickHandler1()
      })
      expect(result.current.numberOfItemsSelected).toBe(val1 + 1)
    }
  })

  it('should clear all items ', () => {
    const { result } = renderHook(useHooks)
    act(() => {
      result.current.clearAll()
    })
    expect(result.current.numberOfItemsSelected).toBe(0)
  })
})
