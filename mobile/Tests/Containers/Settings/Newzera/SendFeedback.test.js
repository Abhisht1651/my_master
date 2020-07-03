// @flow
import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import SendFeedback from '../../../../App/Containers/Settings/Newzera/SendFeedback'

describe('SendFeedback', () => {
  it('should render the Image Component', () => {
    const wrapper = shallow(<SendFeedback />)
    expect(wrapper.find('Image')).toHaveLength(1)
  })

  it('should render the Image Component', () => {
    const wrapper = shallow(<SendFeedback />)
    expect(wrapper.find('Text')).toHaveLength(3)
  })
})
