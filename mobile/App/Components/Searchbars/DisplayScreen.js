import React from 'react'
import { View, Text } from 'react-native'

import SearchBarDefault from './SearchBarDefault'
import SearchBarSmall from './SearchBarSmall'
import styles from '../Styles/SearchBarStyles/DisplayScreenStyle'

const DisplayScreen = () => {
  const captureText = (text) => {
    console.log(text)
  }
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <View style={styles.box2}>
          <Text>Search bar 1</Text>
        </View>
        <SearchBarDefault onSearchHandler={captureText} />
      </View>
      <View style={styles.box1}>
        <View style={styles.box2}>
          <Text>Search bar 2</Text>
        </View>
        <SearchBarSmall onSearchHandler={captureText} />
      </View>
    </View>
  )
}

export default DisplayScreen
