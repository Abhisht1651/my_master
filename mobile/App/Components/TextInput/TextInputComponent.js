// @flow

import React, { useState, useEffect } from 'react'
import { TextInput, Platform, StyleSheet } from 'react-native'
import styles from '../Styles/TextInputStyles/TextInputComponentStyles'

type Props = {
  placeholder: string,
  placeholderTextColor: string,
  borderBottomColor: string,
  captureText: (arg: string) => void,
  onFocus: () => void,
  onBlur: () => void,
  borderBottomStyle: StyleSheet
}
const TextInputComponent = (props: Props) => {
  const [textInputValue, setTextInputValue] = useState('')
  const [customStyle, setCustomStyle] = useState({ borderBottomColor: '#8F8FAF' })
  const {
    placeholder,
    placeholderTextColor,
    borderBottomColor,
    borderBottomStyle,
    captureText,
    onFocus,
    onBlur
  } = props

  useEffect(() => {
    captureText(textInputValue)
  }, [textInputValue])

  const inputChangeHandler = (text: string) => {
    let color = ''
    if (text === '') color = '#8F8FAF'
    else color = `${borderBottomColor}`
    setTextInputValue(text)
    setCustomStyle({ borderBottomColor: color })
  }

  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      underlineColorAndroid="transparent"
      selectionColor="#7B46E4"
      autoCorrect={false}
      spellCheck={false}
      value={textInputValue}
      keyboardType={Platform.OS === 'ios' ? 'default' : 'visible-password'}
      style={[styles.textInput, customStyle, borderBottomStyle]}
      onChangeText={inputChangeHandler}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  )
}

TextInputComponent.defaultProps = {
  placeholder: 'Full name',
  placeholderTextColor: '#8F8FAF',
  borderBottomColor: '#7B46E4',
  borderBottomStyle: StyleSheet.create({}),
  onFocus: () => {},
  onBlur: () => {}
}

export default TextInputComponent
