import { shallow } from 'enzyme'
import React from 'react'

import SearchSuggestion2 from '../../../App/Components/SearchSuggestion/SearchSuggestion2'

describe('SearchSuggestion', () => {
  it('should match to snapshot', () => {
    const component = shallow(<SearchSuggestion2 />)
    expect(component).toMatchSnapshot()
  })
})
