import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import Header from '../../App/Components/Header'

test('Header component renders correctly', () => {
  const tree = renderer.create(<Header count={3} />).toJSON()
  expect(tree).toMatchSnapshot()
})
test('Header component with backButton renders correctly', () => {
  let i = 0
  const func = () => i++

  const tree = renderer.create(<Header onPressBack={func} />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Header component with right side text renders correctly', () => {
  const tree = renderer.create(<Header rightText="Hello" />).toJSON()
  expect(tree).toMatchSnapshot()
})
test('Header component with backbutton and right side text renders correctly', () => {
  let i = 0
  const func = () => i++
  let j = 0
  const func1 = () => j++
  const tree = renderer
    .create(<Header onPressBack={func} rightText="Hello" onPressRight={func1} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

test('Header check on press of back button and right side text', () => {
  let i = 0
  const func = () => i++
  let j = 0
  const func1 = () => j++
  const wrapper = shallow(<Header onPressBack={func} rightText="Hello" onPressRight={func1} />)
  expect(wrapper.find(Text).prop('children')).toBe('Hello')

  expect(i).toBe(0)

  wrapper.find(TouchableOpacity).at(0).simulate('press')
  expect(i).toBe(1)
  expect(j).toBe(0)
  wrapper.find(TouchableOpacity).at(1).simulate('press')
  expect(j).toBe(1)
})
