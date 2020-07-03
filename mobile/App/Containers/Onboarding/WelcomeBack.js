// @flow

import React from 'react'
import { View, Image, Text, Platform } from 'react-native'
import { Images } from '../../Themes'

// Styles
import styles from '../Styles/Onboarding/WelcomeBackStyles'
import { MediumButton } from '../../Components/Buttons/MediumButton'

const WelcomeBack = () => {
  return (
    <View style={styles.section}>
      {Platform.OS === 'ios' && <View style={styles.statusBar} />}
      <Image source={Images.newzeraPurpleLogo} style={styles.logo} />
      <Text style={styles.heading}>Welcome back, Amanda</Text>
      <Image source={Images.bitmap2x} style={styles.profilepic} />
      <Text style={styles.or}>or</Text>
      <View style={styles.button}>
        <MediumButton outline title="Sign up with another account" />
      </View>
    </View>
  )
}
export default WelcomeBack
