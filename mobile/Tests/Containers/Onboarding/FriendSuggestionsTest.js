import { FlatList } from 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import FriendSuggestion from '../../../App/Containers/Onboarding/FriendSuggestion'
import { LargeButton } from '../../../App/Components/Buttons/LargeButton'

import Header from '../../../App/Components/Header'

const createTestProps = () => ({
  navigation: {
    navigate: jest.fn()
  }
})

describe('FriendSuggestion', () => {
  describe('rendering', () => {
    let wrapper
    let props // use type "any" to opt-out of type-checking
    beforeEach(() => {
      props = createTestProps({})
      wrapper = shallow(<FriendSuggestion props />) // no compile-time error
      let x = props
      if (x) x = props
    })
    it('should match to snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
    it('should render a <Header />', () => {
      expect(wrapper.find(Header)).toHaveLength(1)
    })
    it('should render a <RoundedButton />', () => {
      expect(wrapper.find(LargeButton)).toHaveLength(1)
    })
    it('should render 1 <Flatlist />', () => {
      expect(wrapper.find(FlatList)).toHaveLength(1)
    })
  })
})
