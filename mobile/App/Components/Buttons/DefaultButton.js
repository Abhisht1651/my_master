// @flow
import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
// Styles
import styles from '../Styles/ButtonStyles/DefaultButtonStyles'

// Import this file from (App/Components/Buttons)
// and Declare where you need to
// implement it by using
// <DefaultButton title="" onPress={}/>

type Props = {
  title: string,
  disabled: boolean,
  outline: boolean,
  onPress: PropTypes.func,
  style: StyleSheet
}

export const DefaultButton = (props: Props) => {
  const { title, disabled, outline, onPress, style } = props
  return (
    <View
      style={[
        disabled
          ? styles.disableddefaultbutton
          : [outline ? styles.defaultoutlinebutton : styles.defaultbutton],
        style
      ]}>
      <TouchableWithoutFeedback disabled={disabled} onPress={onPress}>
        <View style={styles.text}>
          <Text
            style={[
              disabled
                ? styles.disableddefaulttext
                : [outline ? styles.defaultoutlinetext : styles.defaulttext],
              style
            ]}>
            {title}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

DefaultButton.defaultProps = {
  title: 'Button',
  disabled: false,
  outline: false,
  onPress: () => {},
  style: {}
}
