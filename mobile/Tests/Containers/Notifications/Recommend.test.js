// @flow
import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import Recommend from '../../../App/Components/Notifications/Recommend'

describe('Recommend', () => {
  it('Recommend component renders correctly', () => {
    const tree = shallow(<Recommend />)
    expect(tree).toMatchSnapshot()
  })

  it('should render the Text Component', () => {
    const wrapper = shallow(<Recommend />)
    expect(wrapper.find('Text')).toHaveLength(4)
  })

  it('should render the Image Component', () => {
    const wrapper = shallow(<Recommend />)
    expect(wrapper.find('Image')).toHaveLength(2)
  })
})
