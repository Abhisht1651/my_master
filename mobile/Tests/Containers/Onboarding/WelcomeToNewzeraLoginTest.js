import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import WelcomeLogin from '../../../App/Containers/Onboarding/WelcomeLogin'
import GradientScreen from '../../../App/Components/GradientScreen'

const createTestProps = () => ({
  navigation: {
    navigate: jest.fn()
  }
})

test('WelcomeLogin component renders correctly', () => {
  const props = createTestProps({})
  const tree = renderer.create(<WelcomeLogin props />).toJSON()
  expect(tree).toMatchSnapshot()
  let x = props
  if (x) x = props
})

describe('WelcomeLogin ', () => {
  describe('rendering', () => {
    let wrapper
    let props
    beforeEach(() => {
      props = createTestProps({})
      wrapper = shallow(<WelcomeLogin props />) // no compile-time error
      let x = props
      if (x) x = props
    })
    it('There should be 1 Gradient Screen', () => {
      expect(wrapper.find(GradientScreen)).toHaveLength(1)
    })
  })
})
