// @flow
import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import TestFile from '../../../App/Containers/Search/SearchSuggestion'

describe('Search Suggestion Screen', () => {
  it('should render the component itself correctly', () => {
    const wrapper = shallow(<TestFile />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render the Text Component', () => {
    const wrapper = shallow(<TestFile />)
    expect(wrapper.find('Text')).toHaveLength(4)
  })
  it('should render the Image Component', () => {
    const wrapper = shallow(<TestFile />)
    expect(wrapper.find('Image')).toHaveLength(3)
  })
})
