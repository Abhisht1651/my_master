import React from 'react'
import { View } from 'react-native'
import ListOfFriends from './ListOfFriends'
import styles from '../Styles/ListOfFriendsStyles/DisplayScreenStyle'

const DisplayScreen = () => {
  return (
    <View style={styles.container}>
      <ListOfFriends
        onPress={() => console.log('Button Pressed')}
        onCancelPress={() => console.log('Press Cancel')}
      />
    </View>
  )
}

export default DisplayScreen
