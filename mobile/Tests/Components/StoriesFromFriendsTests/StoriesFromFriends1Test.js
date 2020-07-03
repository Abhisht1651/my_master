import { shallow } from 'enzyme'
import React from 'react'
import StoriesFromFriends1 from '../../../App/Components/StoriesFromFriends/StoriesFromFriends1'

describe('StoriesFromFriends1', () => {
  it('should match to snapshot', () => {
    const component = shallow(<StoriesFromFriends1 />)
    expect(component).toMatchSnapshot()
  })
  it('should render Image', () => {
    const component = shallow(<StoriesFromFriends1 />)
    expect(component.find('Image')).toHaveLength(1)
  })
})
