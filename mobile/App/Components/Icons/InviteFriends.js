import React from 'react'
import { View, Text } from 'react-native'

// Styles
import styles from '../Styles/IconStyles/InviteFriendsStyles'
import InviteFriendsSVG from '../../Images/Icons/icon-invite-friends.svg'

const InviteFriends = () => {
  return (
    <View style={styles.cardBox}>
      <View style={styles.profileIconBox}>
        <InviteFriendsSVG />
      </View>
      <View style={styles.TextBox}>
        <Text style={styles.TextStyles}>Invite Friends</Text>
      </View>
    </View>
  )
}

export default InviteFriends
