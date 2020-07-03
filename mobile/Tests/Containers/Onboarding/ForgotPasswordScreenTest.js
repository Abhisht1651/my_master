import { Image, Text } from 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import ForgotPasswordScreen from '../../../App/Containers/Onboarding/ForgotPasswordScreen'
import { MediumButton } from '../../../App/Components/Buttons/MediumButton'
import InputText from '../../../App/Components/TextInput/TextInputComponent'

import ClickableText from '../../../App/Components/ClickableText'

const createTestProps = (props) => ({
  navigation: {
    navigate: jest.fn()
  },
  ...props
})

describe('ForgotPasswordScreen', () => {
  describe('rendering', () => {
    let wrapper
    let props
    beforeEach(() => {
      props = createTestProps({})
      wrapper = shallow(<ForgotPasswordScreen {...props} />) // no compile-time error
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
    it('1st <InputText /> is email', () => {
      const inputText = wrapper.find(InputText).at(0)
      expect(inputText.prop('placeholder')).toBe('Email /Phone No.')
    })
    it('should render 3 <Text /> tag', () => {
      expect(wrapper.find(Text)).toHaveLength(3)
    })

    it('should render 1 <Rounded Button />', () => {
      expect(wrapper.find(MediumButton)).toHaveLength(1)
    })
    it('should navigate to Modal Screen when clicked on Button', () => {
      const button1 = wrapper.find(MediumButton).at(0)
      button1.simulate('press')
      expect(props.navigation.navigate).toHaveBeenCalledWith('EmailSent')
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
