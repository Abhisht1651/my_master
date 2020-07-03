// @flow
import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import TestFile from '../../../App/Containers/Search/SearchResultsStoryLine'
import StoryLineShortesCard from '../../../App/Components/StoryLineShortesCard'

describe('Search Results StoryLine Screen', () => {
  it('should render the component itself correctly', () => {
    const wrapper = shallow(<TestFile />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render the StoryLineShortesCard Component', () => {
    const wrapper = shallow(<TestFile />)
    expect(wrapper.find(StoryLineShortesCard)).toHaveLength(9)
  })
})
