import { shallow } from 'enzyme'
import React from 'react'

import LocationCard from '../../../App/Components/PopUps/LocationCard'

describe('LocationCard', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<LocationCard />)
      expect(component).toMatchSnapshot()
    })
  })
})

it('should render the Text Component', () => {
  const wrapper = shallow(<LocationCard />)
  expect(wrapper.find('Text')).toHaveLength(3)
})
