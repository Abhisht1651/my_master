// @flow
import React from 'react'
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
// Styles
import styles from '../Styles/ButtonStyles/LargeButtonStyles'

// Import this file from (App/Components/Buttons)
// and Declare where you need to
// implement it by using
// <LargeButton title="" onPress={}/>

type Props = {
  title: string,
  disabled: boolean,
  onPress: PropTypes.func,
  style: StyleSheet
}

export const LargeButton = (props: Props) => {
  const { title, disabled, onPress, style } = props
  return (
    <View style={[disabled ? styles.disabledlargebutton : styles.largebutton, style]}>
      <TouchableWithoutFeedback disabled={disabled} onPress={onPress}>
        <View style={styles.text}>
          <Text style={[disabled ? styles.disabledlargetext : styles.largetext, style]}>
            {title}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

LargeButton.defaultProps = {
  title: 'Button',
  disabled: false,
  onPress: () => {},
  style: {}
}
