import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import ModalScreen from '../../../App/Containers/Onboarding/ModalScreen'

import OTPTextView from '../../../App/Components/OTPTextView'
import ClickableText from '../../../App/Components/ClickableText'
import { MediumThinButton } from '../../../App/Components/Buttons/MediumThinButton'

const createTestProps = (props) => ({
  navigation: {
    navigate: jest.fn()
  },
  ...props
})

test('ModalScreen component renders correctly', () => {
  const props = createTestProps({})
  const tree = renderer.create(<ModalScreen {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})

describe('ModalScreen ', () => {
  describe('rendering', () => {
    let wrapper
    let props
    beforeEach(() => {
      props = createTestProps({})
      wrapper = shallow(<ModalScreen {...props} />) // no compile-time error
    })
    it('should match to snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
    it('There should be 1 ClickableText', () => {
      expect(wrapper.find(ClickableText)).toHaveLength(1)
    })
    it('There should be 1 OTP', () => {
      expect(wrapper.find(OTPTextView)).toHaveLength(1)
    })
    it('Match number of OTP text', () => {
      const grad = wrapper.find(OTPTextView).at(0)
      expect(grad.prop('inputCount')).toBe(6)
    })
    it('There should be 1 RoundedButton', () => {
      expect(wrapper.find(MediumThinButton)).toHaveLength(1)
    })
  })
})
