import { shallow } from 'enzyme'
import React from 'react'

import DeleteAccountCard from '../../../App/Components/PopUps/DeleteAccountCard'

describe('DeleteAccountCard', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<DeleteAccountCard />)
      expect(component).toMatchSnapshot()
    })
  })
})

it('should render the Text Component', () => {
  const wrapper = shallow(<DeleteAccountCard />)
  expect(wrapper.find('Text')).toHaveLength(3)
})
