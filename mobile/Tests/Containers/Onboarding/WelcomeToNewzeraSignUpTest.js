import { Text } from 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import WelcomeSignUp from '../../../App/Containers/Onboarding/WelcomeSignUp'
import GradientScreen from '../../../App/Components/GradientScreen'
import Header from '../../../App/Components/Header'

const createTestProps = () => ({
  navigation: {
    navigate: jest.fn()
  }
})

test('WelcomeSignUp component renders correctly', () => {
  const props = createTestProps({})
  const tree = renderer.create(<WelcomeSignUp props />).toJSON()
  let x = props
  if (x) x = props
  expect(tree).toMatchSnapshot()
})

describe('WelcomeSignUp ', () => {
  describe('rendering', () => {
    let wrapper
    let props // use type "any" to opt-out of type-checking
    beforeEach(() => {
      props = createTestProps({})
      wrapper = shallow(<WelcomeSignUp props />) // no compile-time error
      let x = props
      if (x) x = props
    })
    it('There should be 1 gradient screen', () => {
      expect(wrapper.find(GradientScreen)).toHaveLength(1)
    })
    it('There should be 1 header', () => {
      expect(wrapper.find(Header)).toHaveLength(1)
    })
    it('There should be 1 Text Component', () => {
      expect(wrapper.find(Text)).toHaveLength(1)
    })
    it('match Text prop text', () => {
      const grad = wrapper.find(Text).at(0)
      expect(grad.prop('children')).toBe('Welcome to Newzera!')
    })
  })
})
