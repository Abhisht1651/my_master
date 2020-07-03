// @flow
import React from 'react'
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
// Styles
import styles from '../Styles/ButtonStyles/X2SButtonStyles'

// Import this file from (App/Components/Buttons)
// and Declare where you need to
// implement it by using
// <X2SButton title="" onPress={}/>

type Props = {
  title: string,
  disabled: boolean,
  outline: boolean,
  float: boolean,
  onPress: PropTypes.func,
  style: StyleSheet
}

export const X2SButton = (props: Props) => {
  const { title, disabled, outline, onPress, style, float } = props
  return (
    <View
      style={[
        disabled
          ? styles.disabledx2sbutton
          : [
              float ? styles.floatx2sbutton : [outline ? styles.outlinex2sbutton : styles.x2sbutton]
            ],
        style
      ]}>
      <TouchableWithoutFeedback disabled={disabled} onPress={onPress}>
        <View style={styles.text}>
          <Text
            style={[
              disabled
                ? styles.disabledx2stext
                : [
                    float ? styles.floatx2stext : [outline ? styles.outlinex2stext : styles.x2stext]
                  ],
              style
            ]}>
            {title}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

X2SButton.defaultProps = {
  title: 'Button',
  disabled: false,
  outline: false,
  float: false,
  onPress: () => {},
  style: {}
}
