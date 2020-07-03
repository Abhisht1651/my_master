// @flow
import React from 'react'
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
// Styles
import styles from '../Styles/ButtonStyles/X3SButtonStyles'

// Import this file from (App/Components/Buttons)
// and Declare where you need to
// implement it by using
// <X3SButton title="" onPress={}/>

type Props = {
  title: string,
  outline: boolean,
  onPress: PropTypes.func,
  style: StyleSheet
}

export const X3SButton = (props: Props) => {
  const { title, outline, onPress, style } = props
  return (
    <View style={[outline ? styles.outlinex3sbutton : styles.x3sbutton, style]}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.text}>
          <Text style={[outline ? styles.outlinex3stext : styles.x3stext, style]}>{title}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

X3SButton.defaultProps = {
  title: 'Button',
  outline: false,
  onPress: () => {},
  style: {}
}
