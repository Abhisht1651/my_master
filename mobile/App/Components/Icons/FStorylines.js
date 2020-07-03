import React from 'react'
import { View, Text } from 'react-native'

// Styles
import styles from '../Styles/IconStyles/FStorylinesStyles'
import FollowedStorylines from '../../Images/Icons/icon-followedstorylines.svg'

const FStorylines = () => {
  return (
    <View style={styles.cardBox}>
      <View style={styles.profileIconBox}>
        <FollowedStorylines />
      </View>
      <View style={styles.TextBox}>
        <Text style={styles.TextStyles}>Followed Storylines</Text>
      </View>
    </View>
  )
}

export default FStorylines
