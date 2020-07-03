import { Image } from 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import LaunchScreen from '../../../App/Containers/Onboarding/LaunchScreen'

const createTestProps = () => ({
  navigation: {
    navigate: jest.fn()
  }
})

test('LaunchScreen renders correctly', () => {
  const props = createTestProps({})
  const tree = renderer.create(<LaunchScreen props />).toJSON()
  expect(tree).toMatchSnapshot()
  let x = props
  if (x) x = props
})

describe('Launch', () => {
  describe('rendering', () => {
    let wrapper
    let props
    beforeEach(() => {
      props = createTestProps({})
      wrapper = shallow(<LaunchScreen props />) // no compile-time error
      let x = props
      if (x) x = props
    })

    it('should render a <Image />', () => {
      expect(wrapper.find(Image)).toHaveLength(1) // SUCCESS
    })
  })
})
