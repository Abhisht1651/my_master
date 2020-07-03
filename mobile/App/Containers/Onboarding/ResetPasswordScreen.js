/* eslint-disable no-unused-vars */
// @flow
import { NavigationContainerProps } from '@react-navigation/native'

import React, { useState } from 'react'
import { Text, Image, View, TouchableOpacity, Platform } from 'react-native'
import { Images } from '../../Themes'

// Styles
import styles from '../Styles/Onboarding/ResetPasswordScreenStyles'
import ClickableText from '../../Components/ClickableText'
import PasswordText from '../../Components/TextInput/TextInputForPassword'
import { MediumButton } from '../../Components/Buttons/MediumButton'

type Props = NavigationContainerProps & {}
const ResetPasswordScreen = (props: Props) => {
  const [passwordtext, setpasswordtext] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')
  const [password, setpassword] = useState('')
  const [type, settype] = useState(-1)
  const [strength, setstrength] = useState('')
  const [isfocussed, setisfocussed] = useState(true)

  const performValidation = (val: string, toValdidate: boolean, validationType: string) => {
    let changeText = ''
    let stren = ''
    let typee = -1
    const pattern = [
      '^.{8,}$', // min 8 chars
      '(?=.*\\d)', // number required
      '(?=.*[A-Z])', // uppercase letter
      '(?=.*[!@#$%^&*])' // special Character
    ]
    const conditions = pattern.map((rule) => new RegExp(rule, 'g'))
    if (val === '') {
      setpasswordtext('')
      setconfirmPassword('')
      setpassword('')
      settype(-1)
      setstrength('')
      return
    }

    if (toValdidate) {
      switch (validationType) {
        case 'password': {
          const checkValid = conditions.map((condition) => condition.test(val))
          // console.log(checkValid);

          if (!checkValid[0]) {
            changeText = 'Password must be minimum 8 characters'
          } else if (!checkValid[1] || !checkValid[2]) {
            stren = 'Weak'
            changeText = 'try using numbers or capital letters'
            typee = 0
          } else if (!checkValid[3]) {
            stren = 'Good'
            typee = 1
            changeText = 'not bad you can go ahead'
          } else {
            stren = 'Strong'
            changeText = ''
            typee = 2
          }
          setpasswordtext(changeText)
          setpassword(val)
          settype(typee)
          setstrength(stren)
          // console.log(state);

          break
        }
        default:
          break
      }
    }
    // console.log(state);
  }

  const onFocus = () => {
    setisfocussed(true)
  }

  const onBlur = () => {
    setisfocussed(false)
  }

  const checkpassword = () => {
    return password === confirmPassword && password !== '' && confirmPassword !== ''
  }
  const getStyle = (typee: number = -1) => {
    if (typee === 0) return styles.weak
    if (typee === 1) return styles.good
    return styles.strong
  }

  const getColor = (typee: number = -1) => {
    if (typee > -1) return { color: '#8F8FAF' }
    return undefined
  }

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
          <Text style={styles.resetPasswordText}>Reset Password</Text>
          <View style={[styles.topsectionMargin, styles.TextInputWidth]}>
            <PasswordText
              placeholder="New Password"
              captureText={(val) => performValidation(val, true, 'password')}
            />
            {checkpassword() === true && (
              <Image source={Images.checkMark} style={styles.checkmark} />
            )}
            <View style={styles.warningContainer}>
              <View style={styles.dirRow}>
                <Text style={getStyle(type)}>{strength} </Text>
                <Text style={[styles.warningText, getColor(type)]}>{passwordtext}</Text>
                {type === 2 && <Image source={Images.checkMark} style={styles.checkmark} />}
              </View>
            </View>
          </View>
          <View style={[styles.textMarginWarning, styles.TextInputWidth]}>
            <PasswordText
              placeholder="Confirm Password"
              captureText={(val) => {
                setconfirmPassword(val)
              }}
            />
            {checkpassword() === true && (
              <Image source={Images.checkMark} style={styles.checkmark} />
            )}
          </View>
        </View>
        <View style={styles.buttonWrap}>
          <MediumButton title="Continue" onPress={() => props.navigation.navigate('LoginScreen')} />

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
export default ResetPasswordScreen
