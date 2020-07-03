/* eslint-disable no-unused-vars */
// @flow
import { NavigationContainerProps } from '@react-navigation/native'

import React, { useState } from 'react'
import { Text, Image, View, TouchableOpacity, Platform } from 'react-native'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import { Images } from '../../Themes'

// Styles
import styles from '../Styles/Onboarding/LoginScreenStyles'
import ClickableText from '../../Components/ClickableText'
import InputText from '../../Components/TextInput/TextInputComponent'
import PasswordText from '../../Components/TextInput/TextInputForPassword'
import { MediumButton } from '../../Components/Buttons/MediumButton'

type Props = NavigationContainerProps & {}
const LoginScreen = (props: Props) => {
  const [userInfo, setUserInfo] = useState('')
  const [userPassword, setPassword] = useState('')
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
          <View style={[styles.InputText, { marginTop: responsiveHeight(9.25) }]}>
            <InputText placeholder="Email / Phone No." captureText={(text) => setUserInfo(text)} />
          </View>
          <View style={[styles.InputText, { marginTop: responsiveHeight(3.2) }]}>
            <PasswordText placeholder="Password" captureText={(text) => setPassword(text)} />
          </View>
        </View>
        <View style={styles.buttonWrap}>
          <MediumButton
            title="Continue"
            onPress={() => props.navigation.navigate('WelcomeLogin')}
          />

          <ClickableText
            style={styles.forgotPass}
            textStyle={styles.forgotPassText}
            onPress={() => props.navigation.navigate('ForgotPasswordScreen')}
            text="Forgot password"
          />
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

export default LoginScreen
