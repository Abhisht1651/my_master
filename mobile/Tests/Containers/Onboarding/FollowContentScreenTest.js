import { FlatList } from 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import FollowContentScreen from '../../../App/Containers/Onboarding/FollowContentScreen'
import { LargeButton } from '../../../App/Components/Buttons/LargeButton'
import ClickableText from '../../../App/Components/ClickableText'
import Header from '../../../App/Components/Header'

const createTestProps = () => ({
  navigation: {
    navigate: jest.fn()
  }
})

describe('FollowContentScreen', () => {
  describe('rendering', () => {
    let wrapper
    let props // use type "any" to opt-out of type-checking
    beforeEach(() => {
      props = createTestProps({})
      wrapper = shallow(<FollowContentScreen props />) // no compile-time error
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
    it('should render 2 <ClickableText />', () => {
      expect(wrapper.find(ClickableText)).toHaveLength(2)
    })
  })
})
