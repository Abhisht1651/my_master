import React, { useState } from 'react'
import { View, ScrollView, Text } from 'react-native'
import LargeTextBox from './LargeTextBox'
import MediumTextBox from './MediumTextBox'
import SmallTextBox from './SmallTextBox'
import styles from '../Styles/TextboxStyles/DisplayScreenStyle'

const DisplayScreen = () => {
  const [typedText, setTypedText] = useState('')
  const inputHandler = (text) => {
    setTypedText(text)
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.box1}>
          <LargeTextBox captureText={inputHandler} />
        </View>
        <View style={styles.box2}>
          <MediumTextBox captureText={inputHandler} />
        </View>
        <View style={styles.box3}>
          <SmallTextBox captureText={inputHandler} />
        </View>
        {/* typed text */}
        <Text>{typedText}</Text>
      </View>
    </ScrollView>
  )
}
export default DisplayScreen
