import { shallow } from 'enzyme'
import React from 'react'
import { TouchableOpacity } from 'react-native'

import InviteFriendsScreen from '../../../App/Containers/Dashboard/InviteFriendsScreen'
import { LargeButton } from '../../../App/Components/Buttons/LargeButton'
import ImportCard from '../../../App/Components/ImportCard/ImportCard'
import BackSVG from '../../../App/Images/Icons/Arrow.svg'

const createTestProps = () => ({
  navigation: {
    navigate: jest.fn()
  }
})
describe('InviteFriendsScreen', () => {
  let wrapper
  let props
  beforeEach(() => {
    props = createTestProps({})
    // eslint-disable-next-line react/jsx-props-no-spreading
    wrapper = shallow(<InviteFriendsScreen {...props} />) // no compile-time error
  })
  it('should match to snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render Text ', () => {
    expect(wrapper.find('Text')).toHaveLength(3)
  })
  it('should render 1 TouchableOpacity', () => {
    expect(wrapper.find(TouchableOpacity)).toHaveLength(2)
  })
  it('should render 1 Back button', () => {
    expect(wrapper.find(BackSVG)).toHaveLength(1)
  })
  it('should render 1 LargeButton', () => {
    expect(wrapper.find(LargeButton)).toHaveLength(1)
  })
  it('should render 1 Import Card', () => {
    expect(wrapper.find(ImportCard)).toHaveLength(1)
  })
  it('Navigate to NewsFeed', () => {
    wrapper.find(TouchableOpacity).at(0).props().onPress()
    expect(props.navigation.navigate).toHaveBeenCalledWith('NewsFeed')
  })
  it('Navigate to ConnectionsScreen', () => {
    wrapper.find(TouchableOpacity).at(1).props().onPress()
    expect(props.navigation.navigate).toHaveBeenCalledWith('ConnectionsScreen')
  })
  it('Navigate to NewsFeed', () => {
    wrapper.find(LargeButton).props().onPress()
    expect(props.navigation.navigate).toHaveBeenCalledWith('NewsFeed')
  })
  it('Navigate to ConnectionsScreen', () => {
    wrapper.find(ImportCard).props().onPress()
    expect(props.navigation.navigate).toHaveBeenCalledWith('ConnectionsScreen')
  })
})
