import { TextInput } from 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import OTPTextView from '../../App/Components/OTPTextView'

const createTestProps = () => ({
  navigation: {
    navigate: jest.fn()
  }
})

describe('OTPTextView', () => {
  describe('rendering', () => {
    let wrapper
    let props // use type "any" to opt-out of type-checking
    beforeEach(() => {
      props = createTestProps({})
      wrapper = shallow(<OTPTextView inputCount={4} props />) // no compile-time error
      let x = props
      if (x) x = props
    })
    it('should match to snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
    it('should render 4 <TextInput />', () => {
      expect(wrapper.find(TextInput)).toHaveLength(4)
    })
  })
})
