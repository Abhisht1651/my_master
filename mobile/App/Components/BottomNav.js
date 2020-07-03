// @flow
import React from 'react'
import PropTypes from 'prop-types'
import { View, TouchableWithoutFeedback, Image } from 'react-native'
import styles from './Styles/BottomNavStyles'
import { Images } from '../Themes'

type Props = {
  newsfeed: boolean,
  search: boolean,
  activity: boolean,
  chats: boolean,
  profile: boolean,
  newsfeedonPress: PropTypes.func,
  searchonPress: PropTypes.func,
  activityonPress: PropTypes.func,
  chatsonPress: PropTypes.func,
  profileonPress: PropTypes.func
}

export const BottomNav = (props: Props) => {
  const {
    newsfeed,
    search,
    activity,
    chats,
    profile,
    newsfeedonPress,
    searchonPress,
    activityonPress,
    chatsonPress,
    profileonPress
  } = props
  return (
    <View style={styles.BottomNav}>
      <View style={styles.box}>
        <View style={styles.container}>
          <View style={styles.margin} />
          <View style={styles.icons}>
            <TouchableWithoutFeedback onPress={newsfeedonPress}>
              <View style={styles.iconspacing}>
                {newsfeed ? (
                  <Image source={Images.newsfeed_sel} style={styles.newsfeed} />
                ) : (
                  <Image source={Images.newsfeed} style={styles.newsfeed} />
                )}
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={searchonPress}>
              <View style={styles.iconspacing}>
                {search ? (
                  <Image source={Images.search_sel} style={styles.searchsel} />
                ) : (
                  <Image source={Images.search} style={styles.search} />
                )}
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={activityonPress}>
              <View style={styles.iconspacing}>
                {activity ? (
                  <Image source={Images.friendsactivity_sel} style={styles.friendsactivity} />
                ) : (
                  <Image source={Images.friendsactivity} style={styles.friendsactivity} />
                )}
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={chatsonPress}>
              <View style={styles.iconspacing}>
                {chats ? (
                  <Image source={Images.chat_sel} style={styles.chat} />
                ) : (
                  <Image source={Images.chat} style={styles.chat} />
                )}
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={profileonPress}>
              <View style={styles.iconspacing}>
                {profile ? (
                  <Image source={Images.profile_sel} style={styles.profile} />
                ) : (
                  <Image source={Images.profile} style={styles.profile} />
                )}
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.margin} />
        </View>
      </View>
    </View>
  )
}

BottomNav.defaultProps = {
  newsfeed: false,
  search: false,
  activity: false,
  chats: false,
  profile: false,
  newsfeedonPress: () => {},
  searchonPress: () => {},
  activityonPress: () => {},
  chatsonPress: () => {},
  profileonPress: () => {}
}
