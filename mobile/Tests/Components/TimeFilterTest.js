import { shallow } from 'enzyme'
import React from 'react'
import { renderHook, act } from '@testing-library/react-hooks'
import useHooks from '../../App/Components/TimeFilter/TimeFilterHooks'

import TimeFilter from '../../App/Components/TimeFilter/TimeFilter'

describe('TimeFilter', () => {
  it('should match to snapshot', () => {
    const component = shallow(<TimeFilter />)
    expect(component).toMatchSnapshot()
  })
  it('should render the Text Component', () => {
    const wrapper = shallow(<TimeFilter />)
    expect(wrapper.find('Text')).toHaveLength(4)
  })

  test('should change vale of checkedJan', () => {
    const { result } = renderHook(() => useHooks())
    const val = result.current.checkedJan
    act(() => {
      result.current.clickHandler2('Jan')
    })

    expect(result.current.checkedJan).toBe(!val)
  })
})
