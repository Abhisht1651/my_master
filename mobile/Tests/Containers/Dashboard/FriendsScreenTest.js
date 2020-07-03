import { shallow } from 'enzyme'
import React from 'react'
import { FlatList, TouchableOpacity } from 'react-native'

import FriendsScreen from '../../../App/Containers/Dashboard/FriendsScreen'
import SearchBarDefault from '../../../App/Components/Searchbars/SearchBarDefault'
import BackSVG from '../../../App/Images/Icons/Arrow.svg'

const createTestProps = () => ({
  navigation: {
    navigate: jest.fn()
  }
})
describe('FriendsScreen', () => {
  let wrapper
  let props
  beforeEach(() => {
    props = createTestProps({})
    // eslint-disable-next-line react/jsx-props-no-spreading
    wrapper = shallow(<FriendsScreen {...props} />) // no compile-time error
  })
  it('should match to snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render Text ', () => {
    expect(wrapper.find('Text')).toHaveLength(1)
  })
  it('should render 1 <Flatlist />', () => {
    expect(wrapper.find(FlatList)).toHaveLength(1)
  })
  it('should render 1 TouchableOpacity', () => {
    expect(wrapper.find(TouchableOpacity)).toHaveLength(1)
  })
  it('should render 1 Back button', () => {
    expect(wrapper.find(BackSVG)).toHaveLength(1)
  })
  it('should render 1 SearchBar', () => {
    expect(wrapper.find(SearchBarDefault)).toHaveLength(1)
  })
  it('Navigate to NewsFeed', () => {
    wrapper.find(TouchableOpacity).props().onPress()
    expect(props.navigation.navigate).toHaveBeenCalledWith('NewsFeed')
  })
})
