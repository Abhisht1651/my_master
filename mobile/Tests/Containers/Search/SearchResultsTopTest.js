// @flow
import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import TestFile from '../../../App/Containers/Search/SearchResultsTop'
import Entities from '../../../App/Components/Entities/CardType1'

describe('Search Results Top Screen', () => {
  it('should render the component itself correctly', () => {
    const wrapper = shallow(<TestFile />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render the Text Component', () => {
    const wrapper = shallow(<TestFile />)
    expect(wrapper.find('Text')).toHaveLength(5)
  })
  it('should render the Entities Component', () => {
    const wrapper = shallow(<TestFile />)
    expect(wrapper.find(Entities)).toHaveLength(1)
  })
})
