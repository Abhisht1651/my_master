// @flow
import React from 'react'
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
// Styles
import styles from '../Styles/ButtonStyles/LargeThinButtonStyles'

// Import this file from (App/Components/Buttons)
// and Declare where you need to
// implement it by using
// <LargeThinButton title="" onPress={}/>

type Props = {
  title: string,
  disabled: boolean,
  outline: boolean,
  other: boolean,
  onPress: PropTypes.func,
  style: StyleSheet
}

export const LargeThinButton = (props: Props) => {
  const { title, disabled, outline, onPress, style, other } = props
  return (
    <View
      style={[
        disabled
          ? styles.disabledlargethinbutton
          : [
              outline
                ? styles.outlinelargethinbutton
                : [other ? styles.otherlargethinbutton : styles.largethinbutton]
            ],
        style
      ]}>
      <TouchableWithoutFeedback disabled={disabled} onPress={onPress}>
        <View style={styles.text}>
          <Text
            style={[
              disabled
                ? styles.disabledlargethintext
                : [
                    outline
                      ? styles.outlinelargethintext
                      : [other ? styles.otherlargethintext : styles.largethintext]
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

LargeThinButton.defaultProps = {
  title: 'Button',
  disabled: false,
  outline: false,
  other: false,
  onPress: () => {},
  style: {}
}
