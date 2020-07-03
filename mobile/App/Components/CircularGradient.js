// @flow
import React from 'react'
import { View, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import PropTypes from 'prop-types'
import styles from './Styles/CircularGradientStyles'

type Props = {
  position?: StyleSheet,
  colors?: PropTypes.array,
  linearGradient?: StyleSheet,
  inside?: StyleSheet,
  source?: PropTypes.object
}

const CircularGradient = (props: Props) => {
  const { position, colors, linearGradient, inside, source } = props
  return (
    <View style={position}>
      <LinearGradient colors={colors} style={[styles.linearGradient, linearGradient]}>
        <View style={[styles.inside, inside]}>{source}</View>
      </LinearGradient>
    </View>
  )
}

CircularGradient.defaultProps = {
  position: StyleSheet.create({}),
  colors: undefined,
  linearGradient: StyleSheet.create({}),
  inside: StyleSheet.create({}),
  source: undefined
}
export default CircularGradient
