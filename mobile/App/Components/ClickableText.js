// @flow
import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

type Props = {
  onPress?: PropTypes.func,
  textStyle?: StyleSheet,
  children?: string,
  style?: StyleSheet,
  text?: string
}
const ClickableText = (props: Props) => {
  const { style, onPress, textStyle, children, text } = props
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Text style={textStyle}> {children || text} </Text>
    </TouchableOpacity>
  )
}

ClickableText.defaultProps = {
  onPress: () => {},
  textStyle: StyleSheet.create({}),
  children: '',
  style: StyleSheet.create({}),
  text: ''
}

export default ClickableText
