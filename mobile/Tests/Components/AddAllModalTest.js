import { shallow } from 'enzyme'
import React from 'react'

import { renderHook, act } from '@testing-library/react-hooks'
import AddAllModal from '../../App/Components/AddAllModal'
import useHooks from '../../App/Components/AddAllModalHook'

describe('AddAllModal', () => {
  it('AddAllModal component renders correctly', () => {
    const wrapper = shallow(<AddAllModal />)
    expect(wrapper).toMatchSnapshot()
  })
})

describe('AddAllModal', () => {
  const { result } = renderHook(useHooks)
  act(() => {
    result.current.toggleListHandler()
  })
  expect(result.current.isModalVisible).toBe(true)
})
