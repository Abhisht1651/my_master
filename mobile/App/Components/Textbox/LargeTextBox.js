// @flow
import React, { useState, useEffect } from 'react'
import { View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import PropTypes from 'prop-types'
import styles from '../Styles/TextboxStyles/LargeTextBoxStyle'
import Sticker from '../../Images/Icons/icon-sticker.svg'
import Colors from '../../Themes/Colors'

type Props = {
  textBoxStyle: PropTypes.object,
  textColor: string,
  placeholder: string,
  placeholderColor: string,
  captureText: (args: string) => void
}

const LargeTextBox = (props: Props) => {
  const [value, setValue] = useState('')
  const { textBoxStyle, textColor, placeholder, placeholderColor, captureText } = props

  const textColorStyle = {
    color: textColor
  }

  useEffect(() => {
    captureText(value)
  }, [value])

  const changeTextHandler = (text: string) => {
    setValue(text)
  }

  return (
    <KeyboardAvoidingView behavior="padding">
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <TextInput
            placeholder={placeholder}
            multiline
            placeholderTextColor={placeholderColor}
            spellCheck={false}
            autoCorrect={false}
            value={value}
            selectionColor={Colors.cursor}
            style={[styles.textInput, textColorStyle, textBoxStyle]}
            onChangeText={changeTextHandler}
          />
        </View>
        <View style={styles.stickerContainer}>
          <TouchableOpacity style={styles.sticker} activeOpacity={1}>
            <Sticker />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

LargeTextBox.defaultProps = {
  textBoxStyle: {},
  textColor: '#000080',
  placeholder: 'You must write something to be able to post!',
  placeholderColor: '#8F8FAF'
}

export default LargeTextBox
