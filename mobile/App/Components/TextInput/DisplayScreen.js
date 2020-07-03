import React, { useState } from 'react'
import { View, Text } from 'react-native'
import TextInputComponent from './TextInputComponent'
import TextInputForPassword from './TextInputForPassword'
import styles from '../Styles/TextInputStyles/DisplayScreenStyle'

const DisplayScreen = () => {
  const [typedText, setTypedText] = useState('')
  const inputHandler = (text) => {
    setTypedText(text)
  }
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TextInputComponent
          captureText={inputHandler}
          onFocus={() => console.log('Focused')}
          onBlur={() => console.log('Blurred!')}
        />
      </View>
      <View style={styles.box}>
        <TextInputForPassword
          captureText={inputHandler}
          onFocus={() => console.log('Focus')}
          onBlur={() => console.log('Blurr')}
        />
      </View>
      <Text>{typedText}</Text>
    </View>
  )
}

export default DisplayScreen
