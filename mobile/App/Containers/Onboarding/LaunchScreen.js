// @flow

import { NavigationContainerProps } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Image, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import images from '../../Themes/Images'

// Styles
import styles from '../Styles/Onboarding/LaunchScreenStyles'

type Props = NavigationContainerProps & {}

const LaunchScreen = (props: Props) => {
  // useEffect(() => {
  //   props.navigation.navigate('GetStartedScreen')
  // }, [])
  const [hideSplash, setHideSplash] = React.useState(false)
  useEffect(() => {
    setTimeout(() => {
      setHideSplash(true)
    }, 3000) // amount of time the splash is shown from the time component is rendered
  }, [])
  React.useEffect(() => {
    if (hideSplash) props.navigation.navigate('GetStartedScreen')
  }, [hideSplash])
  const { newzeraWhiteLogo } = images
  return (
    <View style={styles.mainContainer}>
      <LinearGradient
        colors={['#7B46E4', '#1F1F64']}
        style={styles.linearGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}>
        <View style={styles.section}>
          <Image source={newzeraWhiteLogo} style={styles.logo} />
        </View>
      </LinearGradient>
    </View>
  )
}
export default LaunchScreen
