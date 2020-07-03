import { shallow } from 'enzyme'
import React from 'react'
import ImportCard from '../../App/Components/ImportCard/ImportCard'

describe('ImportCard', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<ImportCard />)
      expect(component).toMatchSnapshot()
    })
  })
})

it('should render the Text Component', () => {
  const wrapper = shallow(<ImportCard />)
  expect(wrapper.find('Text')).toHaveLength(2)
})
