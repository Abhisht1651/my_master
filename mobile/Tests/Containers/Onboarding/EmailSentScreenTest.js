import { Image, Text } from 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import EmailSent from '../../../App/Containers/Onboarding/EmailSent'
import GradientScreen from '../../../App/Components/GradientScreen'
import Images from '../../../App/Themes/Images'

const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn()
  },
  ...props
})

test('EmailSent component renders correctly', () => {
  const props = createTestProps({})
  const tree = renderer.create(<EmailSent {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})

describe('EmailSent ', () => {
  describe('rendering', () => {
    let wrapper
    let props
    beforeEach(() => {
      props = createTestProps({})
      wrapper = shallow(<EmailSent {...props} />) // no compile-time error
    })
    it('match source prop of image', () => {
      const img = wrapper.find(Image).at(0)
      expect(img.prop('source')).toBe(Images.newzeraPurpleLogo)
    })
    it('There should be 1 Gradient Screen', () => {
      expect(wrapper.find(GradientScreen)).toHaveLength(1)
    })
    it('match text of Gradient Screen', () => {
      const grad = wrapper.find(GradientScreen).at(0)
      expect(grad.prop('middle')).toMatchObject(
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            color: '#1F1F60',
            fontFamily: 'BananaGrotesk-Medium',
            fontSize: 36
          }}>
          Code Sent
        </Text>
      )
    })
  })
})
