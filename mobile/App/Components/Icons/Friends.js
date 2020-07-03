import React from 'react'
import { View, Text } from 'react-native'

// Styles
import styles from '../Styles/IconStyles/FriendsStyles'
import FriendsSVG from '../../Images/Icons/icon-friends.svg'

const Friends = () => {
  return (
    <View style={styles.cardBox}>
      <View style={styles.profileIconBox}>
        <FriendsSVG />
      </View>
      <View style={styles.TextBox}>
        <Text style={styles.TextStyles}>Friends</Text>
      </View>
    </View>
  )
}

export default Friends
