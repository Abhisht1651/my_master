// @flow
import React from 'react'
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
// Styles
import styles from '../Styles/ButtonStyles/X4SButtonStyles'

// Import this file from (App/Components/Buttons)
// and Declare where you need to
// implement it by using
// <X4SButton title="" onPress={}/>

type Props = {
  title: string,
  disabled: boolean,
  outline: boolean,
  onPress: PropTypes.func,
  style: StyleSheet
}

export const X4SButton = (props: Props) => {
  const { title, disabled, outline, onPress, style } = props
  return (
    <View
      style={[
        disabled
          ? styles.disabledx4sbutton
          : [outline ? styles.outlinex4sbutton : styles.x4sbutton],
        style
      ]}>
      <TouchableWithoutFeedback disabled={disabled} onPress={onPress}>
        <View style={styles.text}>
          <Text
            style={[
              disabled
                ? styles.disabledx4stext
                : [outline ? styles.outlinex4stext : styles.x4stext],
              style
            ]}>
            {title}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

X4SButton.defaultProps = {
  title: 'Button',
  disabled: false,
  outline: false,
  onPress: () => {},
  style: {}
}
