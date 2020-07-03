import React from 'react'
import { shallow } from 'enzyme'
import { TouchableOpacity, FlatList } from 'react-native'
import SendRaven from '../../../App/Containers/Raven/SendRaven'
import { Images } from '../../../App/Themes'
// Test for RavenAll (snapshot and props)
describe('RavenAll', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(
      <SendRaven
        route={{
          params: {
            item: {
              seen: 50,
              total: 500,
              category: 'World',
              storyTitle: 'UK exit from the European Union',
              date: 'Sept 21, 2019',
              description: 'Ray Contreras talks about the different accents',
              source: 'Forbes',
              trending: true,
              storyImage: Images.storyImage
            }
          }
        }}
      />
    ) // no compile-time error
  })
  it('RavenAll component renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('RavenAll BottomNav', () => {
    expect(wrapper.find('BottomNav')).toHaveLength(0)
  })
  it('should render 2 TouchableOpacity', () => {
    expect(wrapper.find(TouchableOpacity)).toHaveLength(3)
  })
  it('should render 1 FlatList', () => {
    expect(wrapper.find(FlatList)).toHaveLength(1)
  })
  it('should render 1 LargeButton', () => {
    expect(wrapper.find('LargeButton')).toHaveLength(1)
  })
})
