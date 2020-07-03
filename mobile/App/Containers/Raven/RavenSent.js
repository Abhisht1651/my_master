// @flow
import { NavigationContainerProps } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { View, Text, StatusBar, Image } from 'react-native'
import styles from '../Styles/RavenStyles/RavenSentStyles'
import { Images } from '../../Themes'

type Props = {
  route: {
    params: {
      selected: Array<string>
    }
  }
} & NavigationContainerProps

const RavenSent = (props: Props) => {
  const { route } = props
  useEffect(() => {
    const timer = setTimeout(() => {
      props.navigation.pop(2)
    }, 4000)
    return () => clearTimeout(timer)
  }, [])
  const Senttext = () => {
    const arr = route.params.selected
    if (arr.length === 0) {
      return (
        <View>
          <Text style={styles.text}>
            A Raven has been sent to all of your circle that hasn't read the story!
          </Text>
        </View>
      )
    }
    if (arr.length === 1) {
      return (
        <View>
          <Text style={styles.text}>A Raven has been sent to {arr[0]}!</Text>
        </View>
      )
    }
    if (arr.length === 2) {
      return (
        <View>
          <Text style={styles.text}>
            A Raven has been sent to {arr[0]} and {arr[1]}!
          </Text>
        </View>
      )
    }
    if (arr.length === 3) {
      return (
        <View>
          <Text style={styles.text}>
            A Raven has been sent to {arr[0]}, {arr[1]} and {arr.length - 2} other!
          </Text>
        </View>
      )
    }
    return (
      <View>
        <Text style={styles.text}>
          A Raven has been sent to {arr[0]}, {arr[1]} and {arr.length - 2} others!
        </Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Image source={Images.background_sent} style={styles.image} />
      <View style={styles.sentmessage}>
        <Image source={Images.light} style={styles.light} />
      </View>
      <View style={styles.textcont}>
        <Senttext />
      </View>
    </View>
  )
}

export default RavenSent
