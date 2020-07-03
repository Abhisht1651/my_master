// @flow
import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import Terms from '../../../../App/Containers/Settings/Newzera/Terms'

describe('Terms', () => {
  it('Terms component renders correctly', () => {
    const tree = shallow(<Terms />)
    expect(tree).toMatchSnapshot()
  })

  it('should render the Text Component', () => {
    const wrapper = shallow(<Terms />)
    expect(wrapper.find('Text')).toHaveLength(6)
  })

  it('should render the Image Component', () => {
    const wrapper = shallow(<Terms />)
    expect(wrapper.find('Image')).toHaveLength(1)
  })
})
