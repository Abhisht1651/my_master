// @flow

import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TextInput, KeyboardAvoidingView } from 'react-native'
import styles from '../Styles/TextboxStyles/MediumTextBoxStyle'
import Colors from '../../Themes/Colors'

type Props = {
  textBoxStyle: PropTypes.object,
  textColor: string,
  placeholder: string,
  placeholderColor: string,
  captureText: (args: string) => void
}

const MediumTextBox = (props: Props) => {
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
        <View style={styles.header}>
          <Text style={styles.headerText}>What do you think?</Text>
        </View>
        <View style={styles.innerContainer}>
          <TextInput
            placeholder={placeholder}
            multiline
            placeholderTextColor={placeholderColor}
            selectionColor={Colors.cursor}
            value={value}
            spellCheck={false}
            autoCorrect={false}
            style={[styles.innerContainerText, textColorStyle, textBoxStyle]}
            onChangeText={changeTextHandler}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

MediumTextBox.defaultProps = {
  textBoxStyle: {},
  textColor: '#000080',
  placeholder: 'Write your opinion.',
  placeholderColor: '#8F8FAF'
}

export default MediumTextBox
