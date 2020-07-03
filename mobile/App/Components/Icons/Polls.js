import React from 'react'
import { View, Text } from 'react-native'

// Styles
import styles from '../Styles/IconStyles/PollsStyles'
import PollSVG from '../../Images/Icons/icon-poll-dark.svg'

const Polls = () => {
  return (
    <View style={styles.cardBox}>
      <View style={styles.profileIconBox}>
        <PollSVG />
      </View>
      <View style={styles.TextBox}>
        <Text style={styles.TextStyles}>My Polls</Text>
      </View>
    </View>
  )
}

export default Polls
