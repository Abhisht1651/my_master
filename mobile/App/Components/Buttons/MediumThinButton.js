// @flow
import React from 'react'
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
// Styles
import styles from '../Styles/ButtonStyles/MediumThinButtonStyles'

// Import this file from (App/Components/Buttons)
// and Declare where you need to
// implement it by using
// <MediumThinButton title="" onPress={}/>

type Props = {
  title: string,
  disabled: boolean,
  onPress: PropTypes.func,
  style: StyleSheet
}

export const MediumThinButton = (props: Props) => {
  const { title, disabled, onPress, style } = props
  return (
    <View style={[disabled ? styles.disabledmediumthinbutton : styles.mediumthinbutton, style]}>
      <TouchableWithoutFeedback disabled={disabled} onPress={onPress}>
        <View style={styles.text}>
          <Text style={[disabled ? styles.disabledmediumthintext : styles.mediumthintext, style]}>
            {title}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

MediumThinButton.defaultProps = {
  title: 'Button',
  disabled: false,
  onPress: () => {},
  style: {}
}
