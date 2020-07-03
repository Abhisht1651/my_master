import { shallow } from 'enzyme'
import React from 'react'
import { FlatList, TouchableOpacity } from 'react-native'

import FollowedStorylinesScreen from '../../../App/Containers/Dashboard/FollowedStorylinesScreen'
import SearchBarDefault from '../../../App/Components/Searchbars/SearchBarDefault'

const createTestProps = () => ({
  navigation: {
    navigate: jest.fn()
  }
})
describe('FollowedStorylinesScreen', () => {
  let wrapper
  let props
  beforeEach(() => {
    props = createTestProps({})
    // eslint-disable-next-line react/jsx-props-no-spreading
    wrapper = shallow(<FollowedStorylinesScreen {...props} />) // no compile-time error
  })
  it('should match to snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render Text ', () => {
    expect(wrapper.find('Text')).toHaveLength(2)
  })
  it('should render 1 <Flatlist />', () => {
    expect(wrapper.find(FlatList)).toHaveLength(1)
  })
  it('should render 1 TouchableOpacity', () => {
    expect(wrapper.find(TouchableOpacity)).toHaveLength(3)
  })
  it('should render 1 SearchBar', () => {
    expect(wrapper.find(SearchBarDefault)).toHaveLength(1)
  })
  it('should render 1 Time Filter', () => {
    expect(wrapper.find('TimeFilter')).toHaveLength(1)
  })
  it('Navigate to NewsFeed', () => {
    wrapper.find(TouchableOpacity).at(0).props().onPress()
    expect(props.navigation.navigate).toHaveBeenCalledWith('NewsFeed')
  })
})
