// @flow
import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import BreakingNews from '../../../App/Components/Notifications/BreakingNews'

describe('BreakingNews', () => {
  it('BreakingNews component renders correctly', () => {
    const tree = shallow(<BreakingNews />)
    expect(tree).toMatchSnapshot()
  })

  it('should render the Text Component', () => {
    const wrapper = shallow(<BreakingNews />)
    expect(wrapper.find('Text')).toHaveLength(4)
  })

  it('should render the Image Component', () => {
    const wrapper = shallow(<BreakingNews />)
    expect(wrapper.find('Image')).toHaveLength(2)
  })
})
