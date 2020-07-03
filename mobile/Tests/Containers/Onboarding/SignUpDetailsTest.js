import { Image } from 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import SignUpDetails from '../../../App/Containers/Onboarding/SignUpDetails'
import InputTextt from '../../../App/Components/TextInput/TextInputComponent'
import TextBox from '../../../App/Components/Textbox/SmallTextBox'
import DropDown from '../../../App/Components/Dropdowns/DropDown1'
import SearchSuggestion from '../../../App/Components/SearchSuggestion/SearchSuggestion2'
import { LargeButton } from '../../../App/Components/Buttons/LargeButton'
import Header from '../../../App/Components/Header'

const createTestProps = () => ({
  navigation: {
    navigate: jest.fn()
  }
})

describe('SignUpDetails', () => {
  describe('rendering', () => {
    let wrapper
    let props // use type "any" to opt-out of type-checking
    beforeEach(() => {
      props = createTestProps({})
      wrapper = shallow(<SignUpDetails props />) // no compile-time error
      let x = props
      if (x) x = props
    })
    it('should match to snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
    it('should render a <Header />', () => {
      expect(wrapper.find(Header)).toHaveLength(1)
    })
    it('should render 2 <Image />', () => {
      expect(wrapper.find(Image)).toHaveLength(2)
    })
    it('should render a <RoundedButton />', () => {
      expect(wrapper.find(LargeButton)).toHaveLength(1)
    })
    it('should render 3 <InputText />', () => {
      expect(wrapper.find(InputTextt)).toHaveLength(3)
    })
    it('should render a <Textbox />', () => {
      expect(wrapper.find(TextBox)).toHaveLength(1)
    })
    it('should render a <DropDown />', () => {
      expect(wrapper.find(DropDown)).toHaveLength(1)
    })
    it('should render a <SearchSuggestion />', () => {
      expect(wrapper.find(SearchSuggestion)).toHaveLength(1)
    })
  })
})
