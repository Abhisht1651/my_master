// @flow
import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import TestFile from '../../../App/Containers/Search/SearchResultsPolls'
import RelatedPoll from '../../../App/Components/RelatedPoll'

describe('Search Results Polls Screen', () => {
  it('should render the component itself correctly', () => {
    const wrapper = shallow(<TestFile />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render the RelatedPoll Component', () => {
    const wrapper = shallow(<TestFile />)
    expect(wrapper.find(RelatedPoll)).toHaveLength(3)
  })
})
