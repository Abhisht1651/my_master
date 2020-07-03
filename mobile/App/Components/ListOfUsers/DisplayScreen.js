import React from 'react'
import { View } from 'react-native'
import ListOfUsers from './ListOfUsers'
import styles from '../Styles/ListOfUserStyles/DisplayScreenStyle'

const DisplayScreen = () => {
  return (
    <View style={styles.container}>
      <ListOfUsers name="Name" optionalText="Optional Text" />
      <ListOfUsers type={2} buttonText="Message" name="Amelia Jones" optionalText="Optional Text" />
    </View>
  )
}

export default DisplayScreen
