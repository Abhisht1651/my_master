// @flow
import { NavigationContainerProps } from '@react-navigation/native'

import * as React from 'react'
import { DrawerContentScrollView } from '@react-navigation/drawer'

import { Text, Image, View, TouchableOpacity } from 'react-native'

import { Images } from '../Themes'
import styles from './Styles/SideBarStyle'

type Props = NavigationContainerProps & {
  pollsPress: () => {},
  requestsPress: () => {},
  friendsPress: () => {},
  invitePress: () => {},
  onStorylinesPress: () => {},
  entitiesPress: () => {},
  notificationPress: () => {},
  settingPress: () => {}
}
const SideBar = (props: Props) => {
  const {
    pollsPress,
    requestsPress,
    friendsPress,
    invitePress,
    onStorylinesPress,
    entitiesPress,
    notificationPress,
    settingPress
  } = props
  return (
    <View style={styles.fullFlex}>
      <DrawerContentScrollView>
        <View style={styles.fullFlex}>
          <View style={[styles.topHeader, styles.container]}>
            <View style={styles.topHeader}>
              <Text style={styles.textStyle}>16</Text>
              <View style={styles.dot} />
              <Text style={styles.superscriptText}>C</Text>
            </View>
            <View style={styles.notificationContainer}>
              <TouchableOpacity onPress={notificationPress}>
                <Image source={Images.notificationIcon} style={styles.notificationIcon} />
              </TouchableOpacity>
              <View style={styles.notificationcountContainer}>
                <Text style={styles.notificationcountText}>24</Text>
              </View>
            </View>
          </View>
          <View style={[styles.topHeader, styles.profileIconContainer]}>
            <Image source={Images.bitmap} style={styles.profileIcon} />
            <Text style={styles.greetingText}>Hello, Amanda</Text>
          </View>
          <View style={styles.shadow} />
          <View style={styles.drawerSection}>
            <TouchableOpacity style={styles.topHeader} onPress={onStorylinesPress}>
              <Image source={Images.followStorylines} style={styles.profileIcon} />
              <Text style={styles.iconfollow}>Followed Storylines</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.topHeader} onPress={entitiesPress}>
              <Image source={Images.followEntities} style={styles.profileIcon} />
              <Text style={styles.iconfollow}>Followed Entities</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.topHeader} onPress={pollsPress}>
              <Image source={Images.myPolls} style={styles.profileIcon} />
              <Text style={styles.iconpoll}>My Polls</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.topHeader} onPress={friendsPress}>
              <Image source={Images.friends} style={styles.profileIcon} />
              <Text style={styles.iconfriend}>Friends</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.topHeader} onPress={requestsPress}>
              <Image source={Images.friendRequests} style={styles.profileIcon} />
              <Text style={styles.iconrequest}>Friend Requests</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.topHeader} onPress={invitePress}>
              <Image source={Images.inviteFriends} style={styles.profileIcon} />
              <Text style={styles.iconinvite}>Invite Friends</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* <DrawerItemList {...props} /> */}
      </DrawerContentScrollView>
      <View style={styles.bottomDrawerSection}>
        <View style={styles.settingsContainer}>
          <TouchableOpacity style={styles.topHeader} onPress={settingPress}>
            <Image source={Images.settings} style={styles.settingsimage} />
            <Text style={styles.iconsetting}>Settings</Text>
          </TouchableOpacity>
          <Image source={Images.nightModeUnactive} style={[styles.icon, styles.darkmode]} />
        </View>
      </View>
    </View>
  )
}

export default SideBar
