import { shallow } from 'enzyme'
import React from 'react'

import SearchSuggestion from '../../../App/Components/SearchSuggestion/SearchSuggestion'

describe('SearchSuggestion', () => {
  it('should match to snapshot', () => {
    const component = shallow(<SearchSuggestion />)
    expect(component).toMatchSnapshot()
  })
})
