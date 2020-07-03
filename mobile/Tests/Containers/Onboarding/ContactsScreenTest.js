import { FlatList } from 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import ContactScreen from '../../../App/Containers/Onboarding/contactsScreen'
import { MediumButton } from '../../../App/Components/Buttons/MediumButton'
import ClickableText from '../../../App/Components/ClickableText'
import Header from '../../../App/Components/Header'

const createTestProps = () => ({
  navigation: {
    navigate: jest.fn()
  }
})

describe('ContactScreen', () => {
  describe('rendering', () => {
    let wrapper
    let props // use type "any" to opt-out of type-checking
    beforeEach(() => {
      props = createTestProps({})
      wrapper = shallow(<ContactScreen props />) // no compile-time error
      let x = props
      if (x) x = props
    })
    it('should match to snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
    it('should render a <Header />', () => {
      expect(wrapper.find(Header)).toHaveLength(1)
    })
    it('should render a <RoundedButton />', () => {
      expect(wrapper.find(MediumButton)).toHaveLength(1)
    })
    it('should render 3 <Flatlist />', () => {
      expect(wrapper.find(FlatList)).toHaveLength(3)
    })
    it('should render 3 <ClickableText />', () => {
      expect(wrapper.find(ClickableText)).toHaveLength(3)
    })
  })
})
