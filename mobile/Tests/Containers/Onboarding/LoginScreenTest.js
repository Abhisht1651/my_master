import { Image, Text } from 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import LoginScreen from '../../../App/Containers/Onboarding/LoginScreen'
import InputText from '../../../App/Components/TextInput/TextInputComponent'
import PasswordText from '../../../App/Components/TextInput/TextInputForPassword'
import { MediumButton } from '../../../App/Components/Buttons/MediumButton'
import ClickableText from '../../../App/Components/ClickableText'

const createTestProps = (props) => ({
  navigation: {
    navigate: jest.fn()
  },
  ...props
})

describe('LoginScreen', () => {
  describe('rendering', () => {
    let wrapper
    let props
    beforeEach(() => {
      props = createTestProps({})
      wrapper = shallow(<LoginScreen {...props} />) // no compile-time error
    })
    it('should match to snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should render 2 <Image />', () => {
      expect(wrapper.find(Image)).toHaveLength(2)
    })

    it('should render 1 <InputText />', () => {
      expect(wrapper.find(InputText)).toHaveLength(1)
    })
    it('should render 1 <PasswordText />', () => {
      expect(wrapper.find(PasswordText)).toHaveLength(1)
    })
    it('1st <InputText /> is email', () => {
      const inputText = wrapper.find(InputText).at(0)
      expect(inputText.prop('placeholder')).toBe('Email / Phone No.')
    })
    it('2nd <PasswordText /> is password', () => {
      const inputText = wrapper.find(PasswordText).at(0)
      expect(inputText.prop('placeholder')).toBe('Password')
    })
    it('should render 1 <Text /> tag', () => {
      expect(wrapper.find(Text)).toHaveLength(1)
    })

    it('should render 1 <Rounded Button />', () => {
      expect(wrapper.find(MediumButton)).toHaveLength(1)
    })

    it('should render <ClickableText /> tag', () => {
      expect(wrapper.find(ClickableText)).toHaveLength(2)
    })
    it('should navigate to ForgotPasswordScreen Screen when clicked on Forgot Password Text', () => {
      const button1 = wrapper.find(ClickableText).at(0)
      button1.simulate('press')
      expect(props.navigation.navigate).toHaveBeenCalledWith('ForgotPasswordScreen')
    })
    it('should navigate to SignUp Screen when clicked on SignUp Text', () => {
      const button1 = wrapper.find(ClickableText).at(1)
      button1.simulate('press')
      expect(props.navigation.navigate).toHaveBeenCalledWith('SignUp')
    })
  })
})
