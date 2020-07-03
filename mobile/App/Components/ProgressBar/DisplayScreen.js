import React from 'react'
import { View } from 'react-native'
import Progress from './Progress'
import styles from '../Styles/ProgreeBarStyles/DisplayScreenStyle'

const DisplayScreen = () => {
  return (
    <View style={styles.container}>
      <Progress count={2} />
    </View>
  )
}

export default DisplayScreen
