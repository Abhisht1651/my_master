// @flow
import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import StoryLineShortestCard from '../../App/Components/StoryLineShortesCard'

describe('StoryLineShortestCard type 1', () => {
  it('should render the component itself correctly', () => {
    const wrapper = shallow(<StoryLineShortestCard />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render the Text Component', () => {
    const wrapper = shallow(<StoryLineShortestCard />)
    expect(wrapper.find('Text')).toHaveLength(3)
  })
  it('should render the Image Component', () => {
    const wrapper = shallow(<StoryLineShortestCard />)
    expect(wrapper.find('Image')).toHaveLength(2)
  })
})

describe('StoryLineShortestCard type 2', () => {
  it('should render the component itself correctly', () => {
    const wrapper = shallow(<StoryLineShortestCard type={2} />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render the Text Component', () => {
    const wrapper = shallow(<StoryLineShortestCard type={2} />)
    expect(wrapper.find('Text')).toHaveLength(3)
  })
  it('should render the Image Component', () => {
    const wrapper = shallow(<StoryLineShortestCard type={2} />)
    expect(wrapper.find('Image')).toHaveLength(1)
  })
})

describe('StoryLineShortestCard type 3', () => {
  it('should render the component itself correctly', () => {
    const wrapper = shallow(<StoryLineShortestCard type={3} />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render the Text Component', () => {
    const wrapper = shallow(<StoryLineShortestCard type={3} />)
    expect(wrapper.find('Text')).toHaveLength(5)
  })
  it('should render the Image Component', () => {
    const wrapper = shallow(<StoryLineShortestCard type={3} />)
    expect(wrapper.find('Image')).toHaveLength(2)
  })
})
