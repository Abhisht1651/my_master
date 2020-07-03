// @flow
import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import Delete from '../../../../App/Containers/Settings/Account/Delete'

describe('Delete', () => {
  it('Delete component renders correctly', () => {
    const tree = shallow(<Delete />)
    expect(tree).toMatchSnapshot()
  })

  it('should render the Text Component', () => {
    const wrapper = shallow(<Delete />)
    expect(wrapper.find('Text')).toHaveLength(3)
  })

  it('should render the Image Component', () => {
    const wrapper = shallow(<Delete />)
    expect(wrapper.find('Image')).toHaveLength(1)
  })
})
