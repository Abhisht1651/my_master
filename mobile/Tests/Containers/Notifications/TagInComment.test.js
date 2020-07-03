// @flow
import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import TagInComment from '../../../App/Components/Notifications/TagInComment'

describe('TagInComment', () => {
  it('TagInComment component renders correctly', () => {
    const tree = shallow(<TagInComment />)
    expect(tree).toMatchSnapshot()
  })

  it('should render the Text Component', () => {
    const wrapper = shallow(<TagInComment />)
    expect(wrapper.find('Text')).toHaveLength(4)
  })

  it('should render the Image Component', () => {
    const wrapper = shallow(<TagInComment />)
    expect(wrapper.find('Image')).toHaveLength(2)
  })

  it('should render the Image Component', () => {
    const wrapper = shallow(<TagInComment />)
    expect(wrapper.find('ImageBackground')).toHaveLength(0)
  })
})
