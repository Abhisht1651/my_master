import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import ClickableText from '../../App/Components/ClickableText'

test('ClickableText component with children renders correctly', () => {
  const tree = renderer.create(<ClickableText onPress={() => {}} text="Howdy" />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('onPress', () => {
  let i = 0
  const onPress = () => i++
  const wrapperPress = shallow(<ClickableText onPress={onPress} text="Hello" />)

  expect(wrapperPress.prop('onPress')).toBe(onPress) // uses the right handler
  expect(i).toBe(0)
  wrapperPress.simulate('press')
  expect(i).toBe(1)
})
