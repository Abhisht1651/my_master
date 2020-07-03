import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import TestFile from '../../../App/Containers/Discover/Home'
import SearchBar from '../../../App/Components/Searchbars/SearchBarDefault'

const createTestProps = () => ({
  navigation: {
    navigate: jest.fn()
  }
})

describe('Home Screen', () => {
  it('should render the component itself correctly', () => {
    const wrapper = shallow(<TestFile />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render the Text Component', () => {
    const wrapper = shallow(<TestFile />)
    expect(wrapper.find('Text')).toHaveLength(11)
  })
  it('should render the SearchBar Component', () => {
    const wrapper = shallow(<TestFile />)
    expect(wrapper.find(SearchBar)).toHaveLength(1)
  })
  it('Navigate to ActivityFeed', () => {
    const props = createTestProps({})
    // eslint-disable-next-line react/jsx-props-no-spreading
    const wrapper = shallow(<TestFile {...props} />)
    wrapper.find('BottomNav').props().activityonPress()
    expect(props.navigation.navigate).toHaveBeenCalledWith('ActivityFeed')
  })
})
