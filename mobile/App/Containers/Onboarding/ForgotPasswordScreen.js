/* eslint-disable no-unused-vars */
// @flow

import { NavigationContainerProps } from '@react-navigation/native'

import React, { useState } from 'react'
import { Text, Image, View, TouchableOpacity, Platform } from 'react-native'
import { Images } from '../../Themes'

// Styles
import styles from '../Styles/Onboarding/ForgotPasswordScreenStyles'
import InputText from '../../Components/TextInput/TextInputComponent'
import ClickableText from '../../Components/ClickableText'
import { MediumButton } from '../../Components/Buttons/MediumButton'

type Props = NavigationContainerProps & {}
const ForgotPasswordScreen = (props: Props) => {
  const [userInfo, setUserInfo] = useState('')
  return (
    <View style={styles.mainContainer}>
      {Platform.OS === 'ios' && <View style={styles.statusBar} />}

      <View style={styles.mainContainer}>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={styles.backArrowContainer}>
          <Image source={Images.leftArrow} style={styles.backArrow} />
        </TouchableOpacity>

        <View style={styles.section}>
          <Image source={Images.newzeraPurpleLogo} style={styles.logo} />
          <Text style={styles.forgotText}>Forgot Password?</Text>
          <Text style={styles.emailText}>Enter your email associated with your account.</Text>
          <View style={styles.inputText}>
            <InputText placeholder="Email /Phone No." captureText={(text) => setUserInfo(text)} />
          </View>
        </View>
        <View style={styles.buttonWrap}>
          <MediumButton title="Continue" onPress={() => props.navigation.navigate('EmailSent')} />

          <View style={styles.sectionRow}>
            <Text style={styles.signUpTextMain}>Not an user? </Text>
            <ClickableText
              textStyle={styles.signUpTextSignUp}
              onPress={() => props.navigation.navigate('SignUp')}
              text="Sign up"
            />
          </View>
        </View>
      </View>
    </View>
  )
}

export default ForgotPasswordScreen
