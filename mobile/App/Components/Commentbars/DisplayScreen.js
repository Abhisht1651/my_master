import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Commentbar1 from './Commentbar1'
import Commentbar2 from './Commentbar2'

const DisplayScreen = () => {
  const [comment, setComment] = useState('')

  const inputHandler = (text) => {
    setComment(text)
  }
  return (
    <View style={styles.container}>
      <Commentbar1 captureText={inputHandler} />
      <Commentbar2 captureText={inputHandler} />
      <Text>{comment}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default DisplayScreen
