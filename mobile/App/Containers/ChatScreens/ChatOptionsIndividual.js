/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-shadow */
// @flow
import { NavigationContainerProps } from '@react-navigation/native'
import React from 'react'
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import styles from './ScreenStyles/ChatOptionsIndividualStyles'
import { Images } from '../../Themes'
import { X2SButton } from '../../Components/Buttons/X2SButton'
import StorylineTab from '../../Components/ChatScreenComponents/StorylineTab'
import PollTab from '../../Components/ChatScreenComponents/PollTab'
import MediaTab from '../../Components/ChatScreenComponents/MediaTab'
import TabBar from '../../Components/ChatScreenComponents/TabBar'
import Toggle from '../../Components/CheckboxRadioAndToggle/Toggle'

type Props = {
  item: {
    id: string,
    profilepic: Image,
    username: string,
    activeStatus: string
  },
  route: {
    params: {
      title: string
    }
  }
} & NavigationContainerProps

const Tab = createMaterialTopTabNavigator()
const Data = [
  {
    id: '1'
  },
  {
    id: '2',
    username: 'Amelia Jones',
    activeStatus: 'Active 45 minutes ago',
    profilepic: Images.profilePicture
  },
  {
    id: '3'
  }
]
const ChatOptionsHeader = (props: Props) => {
  const { title } = props.route.params
  const { navigation } = props

  const printToggle = () => {
    console.log('Toggle pressed')
  }

  const renderitem = ({ item }: Props) => {
    if (item.id === '1') {
      return (
        <View style={styles.header}>
          <View style={styles.backbutton}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={Images.arrowleft} style={styles.arrowleft} />
            </TouchableOpacity>
          </View>
          <Text style={styles.heading}>Chat options</Text>
        </View>
      )
    }
    if (item.id === '2') {
      return (
        <View style={styles.container1}>
          <Image source={item.profilepic} style={styles.grpicon} />
          <Text style={styles.grpnametext}>{title}</Text>
          <Text style={styles.activetext}>{item.activeStatus}</Text>
          <View style={styles.button}>
            <X2SButton title="View profile" outline />
          </View>
          <View style={styles.options}>
            <View style={styles.optionscont}>
              <Text style={styles.optionstext}>Mute notifications</Text>
              <View style={styles.togglebutton}>
                <Toggle onPress={printToggle} />
              </View>
            </View>
            <View style={styles.border} />
            <View style={styles.optionscont}>
              <TouchableOpacity>
                <View>
                  <Text style={styles.optionstext}>Block user</Text>
                  <View style={styles.togglebutton}>
                    <Image source={Images.right_purple} style={styles.right} />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.border} />
            <View style={styles.optionscont}>
              <TouchableOpacity>
                <View>
                  <Text style={styles.optionstext}>Report profile</Text>
                  <View style={styles.togglebutton}>
                    <Image source={Images.right_purple} style={styles.right} />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.borderlast} />
          </View>
        </View>
      )
    }
    return (
      <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
        <Tab.Screen name="Storyline" component={StorylineTab} />
        <Tab.Screen name="Polls" component={PollTab} />
        <Tab.Screen name="Media" component={MediaTab} />
      </Tab.Navigator>
    )
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={Data}
        keyExtractor={(item) => item.id}
        renderItem={renderitem}
        stickyHeaderIndices={[0]}
      />
    </View>
  )
}

export default ChatOptionsHeader
