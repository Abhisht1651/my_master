import { Image, Text } from 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import SignUp from '../../../App/Containers/Onboarding/SignUp'
import Checkbox from '../../../App/Components/CheckboxRadioAndToggle/SmallCheckbox'
import InputTextt from '../../../App/Components/TextInput/TextInputComponent'
import PasswordText from '../../../App/Components/TextInput/TextInputForPassword'
import { MediumButton } from '../../../App/Components/Buttons/MediumButton'
import ClickableText from '../../../App/Components/ClickableText'

const createTestProps = (props) => ({
  navigation: {
    navigate: jest.fn()
  },
  ...props
})

describe('SignUp', () => {
  describe('rendering', () => {
    let wrapper
    let props
    beforeEach(() => {
      props = createTestProps({})
      wrapper = shallow(<SignUp {...props} />) // no compile-time error
    })
    it('should match to snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should render 2 <Image />', () => {
      expect(wrapper.find(Image)).toHaveLength(2)
    })

    it('should render 2 <InputText />', () => {
      expect(wrapper.find(InputTextt)).toHaveLength(2)
    })
    it('should render 2 <PasswordText />', () => {
      expect(wrapper.find(PasswordText)).toHaveLength(2)
    })
    it('should render 7 <Text /> tag', () => {
      expect(wrapper.find(Text)).toHaveLength(7)
    })

    it('should render <CheckBox /> tag', () => {
      expect(wrapper.find(Checkbox)).toHaveLength(1)
    })

    it('should render 1 <Rounded Button />', () => {
      expect(wrapper.find(MediumButton)).toHaveLength(1)
    })

    it('should render <ClickableText /> tag', () => {
      expect(wrapper.find(ClickableText)).toHaveLength(1)
    })
    it('should navigate to Login Screen when clicked on Text', () => {
      const button1 = wrapper.find(ClickableText).at(0)
      button1.simulate('press')
      expect(props.navigation.navigate).toHaveBeenCalledWith('LoginScreen')
    })
  })
})
