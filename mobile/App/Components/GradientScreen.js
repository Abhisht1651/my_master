// @flow

import React from 'react'
import { View } from 'react-native'

// Styles
import PropTypes from 'prop-types'
import styles from './Styles/GradientStyles'
import CircularGradient from './CircularGradient'

type Props = {
  middle: PropTypes.Object
}
const GradientScreen = (props: Props) => {
  const color1 = ['rgba(70, 195, 244, 1)', 'rgba(178, 124, 243, 1)']
  const color2 = ['rgba(70, 195, 244, .8)', 'rgba(178, 124, 243, .8)']
  const color3 = ['rgba(70, 195, 244, .6)', 'rgba(178, 124, 243, .6)']
  const color4 = ['rgba(70, 195, 244, .4)', 'rgba(178, 124, 243, .4)']
  const color5 = ['rgba(70, 195, 244, .2)', 'rgba(178, 124, 243, .2)']
  const { middle } = props
  return (
    <View style={styles.section}>
      <CircularGradient
        colors={color5}
        position={styles.position}
        linearGradient={styles.circle1_Outside}
        inside={styles.circle1_Inside}
      />
      <CircularGradient
        colors={color4}
        position={styles.position}
        linearGradient={styles.circle2_Outside}
        inside={styles.circle2_Inside}
      />
      <CircularGradient
        colors={color3}
        position={styles.position}
        linearGradient={styles.circle3_Outside}
        inside={styles.circle3_Inside}
      />
      <CircularGradient
        colors={color2}
        position={styles.position}
        linearGradient={styles.circle4_Outside}
        inside={styles.circle4_Inside}
      />
      <CircularGradient
        colors={color1}
        position={styles.position}
        linearGradient={styles.circle5_Outside}
        inside={styles.circle5_Inside}
        source={middle}
      />
    </View>
  )
}
GradientScreen.defaultProps = {
  middle: undefined
}
export default GradientScreen
