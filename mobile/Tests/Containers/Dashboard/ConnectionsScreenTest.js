import { shallow } from 'enzyme'
import React from 'react'
import { FlatList } from 'react-native'

import ConnectionsScreen from '../../../App/Containers/Dashboard/ConnectionsScreen'
import { LargeButton } from '../../../App/Components/Buttons/LargeButton'
import { MediumButton } from '../../../App/Components/Buttons/MediumButton'
import ClickableText from '../../../App/Components/ClickableText'
import Header from '../../../App/Components/Header'

const createTestProps = () => ({
  navigation: {
    navigate: jest.fn()
  }
})
describe('ConnectionsScreen', () => {
  let wrapper
  let props
  beforeEach(() => {
    props = createTestProps({})
    // eslint-disable-next-line react/jsx-props-no-spreading
    wrapper = shallow(<ConnectionsScreen {...props} />) // no compile-time error
  })
  it('should match to snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render Text ', () => {
    expect(wrapper.find('Text')).toHaveLength(6)
  })
  it('should render LargeButton ', () => {
    expect(wrapper.find(LargeButton)).toHaveLength(1)
  })
  it('should render a <Header />', () => {
    expect(wrapper.find(Header)).toHaveLength(1)
  })
  it('should render a <RoundedButton />', () => {
    expect(wrapper.find(MediumButton)).toHaveLength(1)
  })
  it('should render 3 <Flatlist />', () => {
    expect(wrapper.find(FlatList)).toHaveLength(3)
  })
  it('should render 3 <ClickableText />', () => {
    expect(wrapper.find(ClickableText)).toHaveLength(3)
  })
  it('Navigate to NewsFeed', () => {
    wrapper.find(LargeButton).props().onPress()
    expect(props.navigation.navigate).toHaveBeenCalledWith('NewsFeed')
  })
})
