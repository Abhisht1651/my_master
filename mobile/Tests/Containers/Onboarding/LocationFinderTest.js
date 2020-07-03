import { Image } from 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import LocationFinder from '../../../App/Containers/Onboarding/LocationFinder'
import CurrentLocationIcon from '../../../App/Images/Icons/icon-currentlocation.svg'

const createTestProps = () => ({
  navigation: {
    navigate: jest.fn()
  }
})

describe('LocationFinder', () => {
  describe('rendering', () => {
    let wrapper
    let props // use type "any" to opt-out of type-checking
    beforeEach(() => {
      props = createTestProps({})
      wrapper = shallow(<LocationFinder props />) // no compile-time error
      let x = props
      if (x) x = props
    })
    it('should match to snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
    it('should render 2 <Image />', () => {
      expect(wrapper.find(Image)).toHaveLength(2)
    })
    it('should render 1 <CurrentLocationIcon />', () => {
      expect(wrapper.find(CurrentLocationIcon)).toHaveLength(1)
    })
  })
})
