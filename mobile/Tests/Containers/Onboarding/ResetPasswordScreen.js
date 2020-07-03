import { Image, Text } from 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import ResetPasswordScreen from '../../../App/Containers/Onboarding/ResetPasswordScreen'
import PasswordText from '../../../App/Components/TextInput/TextInputForPassword'
import { MediumButton } from '../../../App/Components/Buttons/MediumButton'
import ClickableText from '../../../App/Components/ClickableText'

const createTestProps = (props) => ({
  navigation: {
    navigate: jest.fn()
  },
  ...props
})

describe('ResetPasswordScreen', () => {
  describe('rendering', () => {
    let wrapper
    let props
    beforeEach(() => {
      props = createTestProps({})
      wrapper = shallow(<ResetPasswordScreen {...props} />) // no compile-time error
    })
    it('should match to snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should render a <Image />', () => {
      expect(wrapper.find(Image)).toHaveLength(2)
    })

    it('should render 2 <PasswordText />', () => {
      expect(wrapper.find(PasswordText)).toHaveLength(2)
    })
    it('<PasswordText /> is password', () => {
      const inputText = wrapper.find(PasswordText).at(0)
      expect(inputText.prop('placeholder')).toBe('New Password')
    })
    it('<PasswordText /> at 1 is confirm password', () => {
      const inputText = wrapper.find(PasswordText).at(1)
      expect(inputText.prop('placeholder')).toBe('Confirm Password')
    })
    it('should render 4 <Text /> tag', () => {
      expect(wrapper.find(Text)).toHaveLength(4)
    })

    it('should render 1 <Rounded Button />', () => {
      expect(wrapper.find(MediumButton)).toHaveLength(1)
    })

    it('should render <ClickableText /> tag', () => {
      expect(wrapper.find(ClickableText)).toHaveLength(1)
    })
    it('should navigate to SignUp Screen when clicked on SignUp Text', () => {
      const button1 = wrapper.find(ClickableText).at(0)
      button1.simulate('press')
      expect(props.navigation.navigate).toHaveBeenCalledWith('SignUp')
    })
  })
})
