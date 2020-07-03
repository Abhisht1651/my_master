import React from 'react'
import { View, Text } from 'react-native'

// Styles
import styles from '../Styles/IconStyles/RequestsStyles'
import RequestsSVG from '../../Images/Icons/icon-friend-requests.svg'

const Requests = () => {
  return (
    <View style={styles.cardBox}>
      <View style={styles.profileIconBox}>
        <RequestsSVG />
      </View>
      <View style={styles.TextBox}>
        <Text style={styles.TextStyles}>Friend Requests</Text>
      </View>
    </View>
  )
}

export default Requests
