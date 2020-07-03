import React from 'react'
import { shallow } from 'enzyme'
import { TouchableWithoutFeedback } from 'react-native'
import CheckBoxCircular from '../../../App/Components/RavenComponents/CheckBoxCircular'
import { Images } from '../../../App/Themes'
// Test for RavenAll (snapshot and props)
describe('RavenAll', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(
      <CheckBoxCircular
        item={{
          name: 'Amelia',
          source: Images.lightfill,
          id: '1',
          source1: Images.lightfill,
          source2: Images.lightfill,
          group: false
        }}
      />
    ) // no compile-time error
  })
  it('RavenAll component renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('RavenAll BottomNav', () => {
    expect(wrapper.find('BottomNav')).toHaveLength(0)
  })
  it('should render 1 TouchableWithoutFeedback', () => {
    expect(wrapper.find(TouchableWithoutFeedback)).toHaveLength(1)
  })
})
