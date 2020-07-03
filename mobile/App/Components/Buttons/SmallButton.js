// @flow
import React from 'react'
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
// Styles
import styles from '../Styles/ButtonStyles/SmallButtonStyles'

// Import this file from (App/Components/Buttons)
// and Declare where you need to
// implement it by using
// <SmallButton title="" onPress={}/>

type Props = {
  title: string,
  onPress: PropTypes.func,
  style: StyleSheet
}

export const SmallButton = (props: Props) => {
  const { title, onPress, style } = props
  return (
    <View style={[styles.smallbutton, style]}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.text}>
          <Text style={styles.smalltext}>{title}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

SmallButton.defaultProps = {
  title: 'Button',
  onPress: () => {},
  style: {}
}
