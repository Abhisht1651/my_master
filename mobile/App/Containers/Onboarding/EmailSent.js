// @flow

import { NavigationContainerProps } from '@react-navigation/native'

import React, { useEffect } from 'react'
import { Image, View, Text, Platform } from 'react-native'
import { Images } from '../../Themes'

// Styles
import styles from '../Styles/Onboarding/EmailSentStyles'
import GradientScreen from '../../Components/GradientScreen'

type Props = NavigationContainerProps & {}

const EmailSent = (props: Props) => {
  // useEffect(() => {
  //   props.navigation.navigate('ForgotPasswordOTP')
  // }, [])
  const [hideSplash, setHideSplash] = React.useState(false)
  useEffect(() => {
    setTimeout(() => {
      setHideSplash(true)
    }, 3000) // amount of time the splash is shown from the time component is rendered
  }, [])
  React.useEffect(() => {
    if (hideSplash) props.navigation.navigate('ForgotPasswordOTP')
  }, [hideSplash])

  return (
    <View style={styles.section}>
      {Platform.OS === 'ios' && <View style={styles.statusBar} />}
      <GradientScreen middle={<Text style={styles.text}>Code Sent</Text>} />

      <Image source={Images.newzeraPurpleLogo} style={styles.logo} />
    </View>
  )
}
export default EmailSent
