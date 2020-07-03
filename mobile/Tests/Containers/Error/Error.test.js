// @flow
import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import Error from '../../../App/Containers/Error/Error'

describe('Error', () => {
  it('Error component renders correctly', () => {
    const tree = shallow(<Error />)
    expect(tree).toMatchSnapshot()
  })

  it('should render the Text Component', () => {
    const wrapper = shallow(<Error />)
    expect(wrapper.find('Text')).toHaveLength(5)
  })

  it('should render the Image Component', () => {
    const wrapper = shallow(<Error />)
    expect(wrapper.find('Image')).toHaveLength(1)
  })
})
