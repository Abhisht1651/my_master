// https://github.com/naveenvignesh5/react-native-otp-textinput/blob/master/index.js
// @flow
import React, { useState } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textInput: {
    textAlign: 'center',
    fontSize: 22
  }
})

const getOTPTextChucks = (inputCount, inputCellLength, text) => {
  let otpText = text.match(new RegExp(`.{1,${inputCellLength}}`, 'g')) || []

  otpText = otpText.slice(0, inputCount)

  return otpText
}

type Props = {
  defaultValue: PropTypes.String,
  inputCount: PropTypes.Sumber,
  containerStyle: StyleSheet,
  textInputStyle: StyleSheet,
  inputCellLength: PropTypes.Number,
  tintColor: PropTypes.String,
  offTintStyle: StyleSheet,
  handleTextChange: PropTypes.Func,
  keyboardType: PropTypes.String,
  changedTextBorder: StyleSheet
}
const OTPTextView = (props: Props) => {
  const {
    inputCount,
    offTintStyle,
    tintColor,
    inputCellLength,
    containerStyle,
    textInputStyle,
    keyboardType,
    changedTextBorder,
    defaultValue,
    handleTextChange
  } = props
  const [focusedInput, setfocusedInput] = useState(0)
  const [otpText, setotpText] = useState(
    getOTPTextChucks(inputCount, inputCellLength, defaultValue)
  )

  const [inputs, setinputs] = useState([])

  const basicValidation = (text) => {
    const validText = /^[0-9a-zA-Z]+$/
    return text.match(validText)
  }

  const onTextChange = (text, i) => {
    if (text && !basicValidation(text)) {
      return
    }
    const oll = otpText
    oll[i] = text
    setotpText(oll)
    handleTextChange(otpText.join(''))
    if (text.length === inputCellLength && i !== inputCount - 1) {
      // $FlowFixMe
      inputs[i + 1].focus()
    }
  }

  const onInputFocus = (i) => {
    const prevIndex = i - 1

    if (prevIndex > -1 && !otpText[prevIndex] && !otpText.join('')) {
      // $FlowFixMe
      inputs[prevIndex].focus()
      return
    }

    setfocusedInput(i)
  }

  const onKeyPress = (e, i) => {
    const val = otpText[i] || ''

    if (e.nativeEvent.key === 'Backspace' && i !== 0 && (!(val.length - 1) || val.length === 0)) {
      // $FlowFixMe
      inputs[i - 1].focus()
    }
  }

  // const clear = () => {
  //   setotpText([])
  //   inputs[0].focus()
  // }

  // const setValue = (value) => {
  //   setotpText(getOTPTextChucks(inputCount, inputCellLength, value))
  //   handleTextChange(value)
  // }

  const TextInputs = []

  for (let i = 0; i < inputCount; i += 1) {
    const inputStyle = [styles.textInput, textInputStyle, offTintStyle]

    if (focusedInput === i && tintColor) {
      inputStyle.push({ borderColor: tintColor })
    }
    if (otpText[i]) {
      inputStyle.push(changedTextBorder)
    }

    TextInputs.push(
      <TextInput
        ref={(e) => {
          const x = inputs
          x[i] = e
          setinputs(x)
        }}
        key={i}
        autoCorrect={false}
        keyboardType={keyboardType}
        autoFocus={false}
        value={otpText[i] || ''}
        style={inputStyle}
        maxLength={inputCellLength}
        onFocus={() => onInputFocus(i)}
        onChangeText={(text) => onTextChange(text, i)}
        multiline={false}
        onKeyPress={(e) => onKeyPress(e, i)}
      />
    )
  }

  return <View style={[styles.container, containerStyle]}>{TextInputs}</View>
}

OTPTextView.defaultProps = {
  defaultValue: '',
  inputCount: 4,
  tintColor: '',
  offTintStyle: {},
  inputCellLength: 1,
  containerStyle: {},
  textInputStyle: {},
  handleTextChange: () => {},
  keyboardType: 'numeric',
  changedTextBorder: {}
}

export default OTPTextView
