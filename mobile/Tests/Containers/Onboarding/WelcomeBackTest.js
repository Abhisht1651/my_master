import { Image } from 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import WelcomeBack from '../../../App/Containers/Onboarding/WelcomeBack'
import { MediumButton } from '../../../App/Components/Buttons/MediumButton'

const createTestProps = () => ({
  navigation: {
    navigate: jest.fn()
  }
})

describe('WelcomeBack', () => {
  describe('rendering', () => {
    let wrapper
    let props // use type "any" to opt-out of type-checking
    beforeEach(() => {
      props = createTestProps({})
      wrapper = shallow(<WelcomeBack props />) // no compile-time error
      let x = props
      if (x) x = props
    })
    it('should match to snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should render a <RoundedButton />', () => {
      expect(wrapper.find(MediumButton)).toHaveLength(1)
    })
    it('should render 2 <Image />', () => {
      expect(wrapper.find(Image)).toHaveLength(2)
    })
  })
})
