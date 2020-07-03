// @flow
import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import TestFile from '../../../App/Containers/Search/SearchResultsPeople'
import ListOfUsers from '../../../App/Components/ListOfUsers/ListOfUsers'

describe('Search Results People Screen', () => {
  it('should render the component itself correctly', () => {
    const wrapper = shallow(<TestFile />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render the ListOfUsers Component', () => {
    const wrapper = shallow(<TestFile />)
    expect(wrapper.find(ListOfUsers)).toHaveLength(11)
  })
})
