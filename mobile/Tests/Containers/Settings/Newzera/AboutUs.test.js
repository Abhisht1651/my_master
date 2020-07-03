// @flow
import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import AboutUs from '../../../../App/Containers/Settings/Newzera/AboutUs'

describe('AboutUs', () => {
  it('AboutUs component renders correctly', () => {
    const tree = shallow(<AboutUs />)
    expect(tree).toMatchSnapshot()
  })

  it('should render the Text Component', () => {
    const wrapper = shallow(<AboutUs />)
    expect(wrapper.find('Text')).toHaveLength(5)
  })

  it('should render the Image Component', () => {
    const wrapper = shallow(<AboutUs />)
    expect(wrapper.find('Image')).toHaveLength(1)
  })
})
