import React from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import { shallow } from 'enzyme'
import ActivityFilterType from '../../../App/Components/ActivityFeedComponents/ActivityFilterType'
// Test for ActivityFilter
describe('ActivityFilter', () => {
  let wrapper
  it('ActivityFilter component renders correctly', () => {
    wrapper = shallow(<ActivityFilterType selected={[]} item={{ name: 'Wall Post' }} />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render 1 TouchableOpacity', () => {
    wrapper = shallow(<ActivityFilterType selected={[]} item={{ name: 'Wall Post' }} />)
    expect(wrapper.find(TouchableWithoutFeedback)).toHaveLength(1)
  })
})
