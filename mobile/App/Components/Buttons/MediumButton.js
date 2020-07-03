// @flow
import React from 'react'
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
// Styles
import styles from '../Styles/ButtonStyles/MediumButtonStyles'

// Import this file from (App/Components/Buttons)
// and Declare where you need to
// implement it by using
// <MediumButton title="" onPress={}/>

type Props = {
  title: string,
  outline: boolean,
  disabled: boolean,
  onPress: PropTypes.func,
  style: StyleSheet
}

export const MediumButton = (props: Props) => {
  const { title, disabled, outline, onPress, style } = props
  return (
    <View
      style={[
        outline
          ? styles.outlinemediumbutton
          : [disabled ? styles.disabledmediumbutton : styles.mediumbutton],
        style
      ]}>
      <TouchableWithoutFeedback onPress={onPress} disabled={disabled}>
        <View style={styles.text}>
          <Text
            style={[
              outline
                ? styles.outlinemediumtext
                : [disabled ? styles.disabledmediumtext : styles.mediumtext],
              style
            ]}>
            {title}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

MediumButton.defaultProps = {
  title: 'Button',
  outline: false,
  disabled: false,
  onPress: () => {},
  style: {}
}
