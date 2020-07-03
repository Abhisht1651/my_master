// @flow

import { NavigationContainerProps } from '@react-navigation/native'

import React from 'react'
import { Text, Image, View, Platform } from 'react-native'
import { Images } from '../../Themes'

// Styles
import styles from '../Styles/Onboarding/GetStartedScreenStyles'
import { MediumButton } from '../../Components/Buttons/MediumButton'

type Props = NavigationContainerProps & {}

const GetStarted = (props: Props) => {
  return (
    <View style={styles.mainContainer}>
      {Platform.OS === 'ios' && <View style={styles.statusBar} />}
      <View style={styles.section}>
        <Image source={Images.newzeraPurpleLogo} style={styles.logo} />
      </View>
      <View style={styles.slogan}>
        <Text style={styles.sloganText}>A better way of catching up.</Text>
      </View>
      <View style={styles.buttonWrap}>
        <MediumButton title="Get Started" onPress={() => props.navigation.navigate('SignUp')} />
        <View style={styles.loginButton}>
          <MediumButton
            outline
            title="Log In"
            onPress={() => props.navigation.navigate('LoginScreen')}
          />
        </View>
      </View>
    </View>
  )
}

export default GetStarted
