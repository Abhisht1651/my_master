// @flow
import React from 'react'
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
// Styles
import styles from '../Styles/ButtonStyles/XSButtonStyles'

// Import this file from (App/Components/Buttons)
// and Declare where you need to
// implement it by using
// <XSButton title="" onPress={}/>

type Props = {
  title: string,
  disabled: boolean,
  outline: boolean,
  onPress: PropTypes.func,
  style: StyleSheet
}

export const XSButton = (props: Props) => {
  const { title, disabled, outline, onPress, style } = props
  return (
    <View
      style={[
        disabled ? styles.disabledxsbutton : [outline ? styles.outlinexsbutton : styles.xsbutton],
        style
      ]}>
      <TouchableWithoutFeedback disabled={disabled} onPress={onPress}>
        <View style={styles.text}>
          <Text
            style={[
              disabled ? styles.disabledxstext : [outline ? styles.outlinexstext : styles.xstext],
              style
            ]}>
            {title}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

XSButton.defaultProps = {
  title: 'Button',
  disabled: false,
  outline: false,
  onPress: () => {},
  style: {}
}
