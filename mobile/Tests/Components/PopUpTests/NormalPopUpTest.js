import { shallow } from 'enzyme'
import React from 'react'

import NormalPopUp from '../../../App/Components/PopUps/NormalPopUp'

describe('NormalPopUp', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<NormalPopUp />)
      expect(component).toMatchSnapshot()
    })
  })
})

it('should render the Text Component', () => {
  const wrapper = shallow(<NormalPopUp />)
  expect(wrapper.find('Text')).toHaveLength(3)
})
