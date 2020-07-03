import React from 'react'
import { shallow } from 'enzyme'
import { TouchableWithoutFeedback } from 'react-native'
import RavenFeed from '../../../App/Components/RavenComponents/RavenFeed'
import Storyline from '../../../App/Components/StoryLineShortCardDefualt'
import { Images } from '../../../App/Themes'
// Test for RavenAll (snapshot and props)
describe('RavenAll', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(
      <RavenFeed
        storylineitem={{
          reach: 45,
          heading: 'World',
          storyTitle: 'UK exit from the European Union',
          friendsFollowing: '45 friends Following',
          updatedTime: '2m',
          following: true,
          trending: true,
          storyImage: Images.storyImage
        }}
      />
    ) // no compile-time error
  })
  it('RavenAll component renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('RavenAll BottomNav', () => {
    expect(wrapper.find('BottomNav')).toHaveLength(0)
  })
  it('should render 2 TouchableWithoutFeedback', () => {
    expect(wrapper.find(TouchableWithoutFeedback)).toHaveLength(2)
  })
  it('should render 1 Storyline', () => {
    expect(wrapper.find(Storyline)).toHaveLength(1)
  })
})
