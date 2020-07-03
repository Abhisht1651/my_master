// @flow
import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import SendFeedbackSubmit from '../../../../App/Containers/Settings/Newzera/SendFeedbackSubmit'

describe('SendFeedbackSubmit', () => {
  it('SendFeedbackSubmit component renders correctly', () => {
    const tree = shallow(<SendFeedbackSubmit />)
    expect(tree).toMatchSnapshot()
  })

  it('should render the Text Component', () => {
    const wrapper = shallow(<SendFeedbackSubmit />)
    expect(wrapper.find('Text')).toHaveLength(3)
  })

  it('should render the Image Component', () => {
    const wrapper = shallow(<SendFeedbackSubmit />)
    expect(wrapper.find('Image')).toHaveLength(1)
  })
})
