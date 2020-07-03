import { shallow } from 'enzyme'
import React from 'react'
import StoriesFromFriends2 from '../../../App/Components/StoriesFromFriends/StoriesFromFriends2'

describe('StoriesFromFriends2', () => {
  it('should match to snapshot', () => {
    const component = shallow(<StoriesFromFriends2 />)
    expect(component).toMatchSnapshot()
  })
  it('should render Image', () => {
    const component = shallow(<StoriesFromFriends2 />)
    expect(component.find('Image')).toHaveLength(2)
  })
})
