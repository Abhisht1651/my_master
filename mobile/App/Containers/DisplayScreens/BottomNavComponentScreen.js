import React from 'react'
import { View, ScrollView } from 'react-native'
import { BottomNav } from '../../Components/BottomNav'
import styles from '../Styles/BottomNavContainerStyles'

const BottomNavContainer = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.active}>
          <BottomNav profile />
        </View>

        <View style={styles.active}>
          <BottomNav newsfeed />
        </View>

        <View style={styles.active}>
          <BottomNav activity />
        </View>

        <View style={styles.active}>
          <BottomNav chats />
        </View>

        <View style={styles.active}>
          <BottomNav search />
        </View>
      </View>
    </ScrollView>
  )
}

export default BottomNavContainer
