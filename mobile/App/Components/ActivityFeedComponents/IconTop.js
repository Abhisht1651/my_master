// @flow
import React from 'react'
import { View, Image } from 'react-native'
import styles from '../Styles/ActivityFeedComponentStyles/IconTopStyles'

type Props = {
  top: Image
}
const IconTop = (props: Props) => {
  const { top } = props
  return (
    <View style={styles.container}>
      <Image source={top} style={styles.imagetop} />
    </View>
  )
}

export default IconTop
