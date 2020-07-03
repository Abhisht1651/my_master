import React from 'react'
import { View, Text } from 'react-native'

// Styles
import styles from '../Styles/IconStyles/FEntitiesStyles'
import FollowedEntities from '../../Images/Icons/icon-followedentities.svg'

const FEntities = () => {
  return (
    <View style={styles.cardBox}>
      <View style={styles.profileIconBox}>
        <FollowedEntities />
      </View>
      <View style={styles.TextBox}>
        <Text style={styles.TextStyles}>Followed Entities</Text>
      </View>
    </View>
  )
}

export default FEntities
