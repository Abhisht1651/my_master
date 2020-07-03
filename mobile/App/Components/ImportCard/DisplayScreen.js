import React from 'react'
import { View } from 'react-native'
import ImportCard from './ImportCard'
import styles from '../Styles/ImportCardStyles/DisplayScreenStyle'

const DisplayScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <ImportCard />
      </View>
    </View>
  )
}

export default DisplayScreen
