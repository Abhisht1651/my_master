import { Image, Text } from 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import GetStartedScreen from '../../../App/Containers/Onboarding/GetStartedScreen'
import { MediumButton } from '../../../App/Components/Buttons/MediumButton'

const createTestProps = (props) => ({
  navigation: {
    navigate: jest.fn()
  },
  ...props
})
test('GetStartedScreen renders correctly', () => {
  const props = createTestProps({})
  const tree = renderer.create(<GetStartedScreen {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
describe('GetStartedScreen', () => {
  describe('rendering', () => {
    let wrapper
    let props
    beforeEach(() => {
      props = createTestProps({})
      wrapper = shallow(<GetStartedScreen {...props} />) // no compile-time error
    })

    it('should render a <Image />', () => {
      expect(wrapper.find(Image)).toHaveLength(1)
    })
    it('should render <Text /> tag', () => {
      expect(wrapper.find(Text)).toHaveLength(1)
    })
    it('should render 2 <Rounded Button />', () => {
      expect(wrapper.find(MediumButton)).toHaveLength(2)
    })

    it('should navigate to SignUp Screen when clicked on Get Started Button', () => {
      const button1 = wrapper.find(MediumButton).at(0)
      button1.simulate('press')
      expect(props.navigation.navigate).toHaveBeenCalledWith('SignUp')
    })
    it('should navigate to LogIn Screen when clicked on Log In', () => {
      const button1 = wrapper.find(MediumButton).at(1)
      button1.simulate('press')
      expect(props.navigation.navigate).toHaveBeenCalledWith('LoginScreen')
    })
  })
})
