// @flow
import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import TestFile from '../../../App/Containers/StoryLine/FullPost'
import Bubbles from '../../../App/Components/Icons/Bubbles'
import DropDown from '../../../App/Components/Dropdowns/DropDown2'
import Source from '../../../App/Components/Source'
import CommentBar from '../../../App/Components/Commentbars/Commentbar2'
import CommentBox from '../../../App/Components/CommentBox'

describe('FullPost Screen', () => {
  it('should render the component itself correctly', () => {
    const wrapper = shallow(<TestFile />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render the Text Component', () => {
    const wrapper = shallow(<TestFile />)
    expect(wrapper.find('Text')).toHaveLength(12)
  })
  it('should render the Image Component', () => {
    const wrapper = shallow(<TestFile />)
    expect(wrapper.find('Image')).toHaveLength(9)
  })
  it('should render the Bubbles Component', () => {
    const wrapper = shallow(<TestFile />)
    expect(wrapper.find(Bubbles)).toHaveLength(1)
  })
  it('should render the DropDown Component', () => {
    const wrapper = shallow(<TestFile />)
    expect(wrapper.find(DropDown)).toHaveLength(1)
  })
  it('should render the Source Component', () => {
    const wrapper = shallow(<TestFile />)
    expect(wrapper.find(Source)).toHaveLength(3)
  })
  it('should render the CommentBar Component', () => {
    const wrapper = shallow(<TestFile />)
    expect(wrapper.find(CommentBar)).toHaveLength(1)
  })
  it('should render the CommentBox Component', () => {
    const wrapper = shallow(<TestFile />)
    expect(wrapper.find(CommentBox)).toHaveLength(5)
  })
})
