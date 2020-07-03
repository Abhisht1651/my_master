// @flow
import React from 'react'
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
// Styles
import styles from '../Styles/ButtonStyles/MediumThinnerButtonStyles'

// Import this file from (App/Components/Buttons)
// and Declare where you need to
// implement it by using
// <MediumThinnerButton title="" onPress={}/>

type Props = {
  title: string,
  outline: boolean,
  onPress: PropTypes.func,
  style: StyleSheet
}

export const MediumThinnerButton = (props: Props) => {
  const { title, outline, onPress, style } = props
  return (
    <View style={[outline ? styles.outlinemediumthinnerbutton : styles.mediumthinnerbutton, style]}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.text}>
          <Text
            style={[outline ? styles.outlinemediumthinnertext : styles.mediumthinnertext, style]}>
            {title}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

MediumThinnerButton.defaultProps = {
  title: 'Button',
  outline: false,
  onPress: () => {},
  style: {}
}
