// @flow
import { NavigationContainerProps } from '@react-navigation/native'

import React, { useState } from 'react'
import { Text, Image, View, TouchableOpacity, ScrollView, Platform } from 'react-native'
import Checkbox from '../../Components/CheckboxRadioAndToggle/SmallCheckbox'
import InputTextt from '../../Components/TextInput/TextInputComponent'
import PasswordText from '../../Components/TextInput/TextInputForPassword'
import { MediumButton } from '../../Components/Buttons/MediumButton'

import ClickableText from '../../Components/ClickableText'

import { Images } from '../../Themes'

// Styles
import styles from '../Styles/Onboarding/SignUpScreenStyles'

type Props = NavigationContainerProps & {}

const SignUp = (props: Props) => {
  const [emailtext, setemailtext] = useState('')
  const [emailrend, setemailrend] = useState(false)
  const [email, setemail] = useState('')
  const [passwordtext, setpasswordtext] = useState('')
  // const [passwordrend, setpasswordrend] = useState(false)
  const [confirmPassword, setconfirmPassword] = useState('')
  const [password, setpassword] = useState('')
  const [type, settype] = useState(-1)
  const [strength, setstrength] = useState('')
  const [isfocussed, setisfocussed] = useState(true)
  const [checkBox, setcheckBox] = useState(false)
  const [passwordStrengthBorder, setpasswordStrengthBorder] = useState('#7B46E4')

  const { navigation } = props
  const performValidation = (val: string, toValdidate: boolean, validationType: string) => {
    let willRend = false
    let changeText = ''
    let stren = ''
    let typee = -1
    let borderColor = ''
    const pattern = [
      '^.{8,}$', // min 8 chars
      '(?=.*\\d)', // number required
      '(?=.*[A-Z])', // uppercase letter
      '(?=.*[!@#$%^&*])' // special Character
    ]
    const conditions = pattern.map((rule) => new RegExp(rule, 'g'))
    if (val === '') {
      if (validationType === 'email') {
        setemailtext('')
        setemailrend(false)
        setemail('')
      } else {
        setpasswordtext('')
        setconfirmPassword('')
        setpassword('')
        settype(-1)
        setstrength('')
        setpasswordStrengthBorder(undefined)
      }
      return
    }

    if (toValdidate) {
      const fil = new RegExp('[a-zA-Z0-9_\\.\\+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-\\.]+', 'g')
      const phn = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\\./0-9]*$/
      const x = fil.test(val)
      const y = phn.test(val)

      switch (validationType) {
        case 'email': {
          if (y && val.length < 13) {
            willRend = true
            changeText = 'Phone need to contain 10 numberic character.'
          } else if (!x && y === false) {
            willRend = true
            changeText = 'Emails need to contain “@“ character.'
          }

          setemailtext(changeText)
          setemailrend(willRend)
          setemail(val)

          break
        }
        case 'password': {
          const checkValid = conditions.map((condition) => condition.test(val))
          // console.log(checkValid);

          if (!checkValid[0]) {
            willRend = true
            changeText = 'Password must be minimum 8 characters'
            borderColor = '#FF1742'
          } else if (!checkValid[1] || !checkValid[2]) {
            willRend = true
            stren = 'Weak'
            changeText = ''
            typee = 0
            borderColor = '#FF1742'
          } else if (!checkValid[3]) {
            willRend = true
            stren = 'Medium'
            typee = 1
            changeText = ''
            borderColor = '#FCB853'
          } else {
            willRend = true
            stren = 'Strong'
            changeText = ''
            typee = 2
            borderColor = '#08C981'
          }
          setpasswordStrengthBorder(borderColor)
          setpasswordtext(changeText)
          setpassword(val)
          settype(typee)
          setstrength(stren)
          break
        }
        default:
          break
      }
    }
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

  const checkButtonStatus = () => {
    return (
      emailrend === false &&
      email !== '' &&
      checkpassword() === true &&
      type > 0 &&
      checkBox === true
    )
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
  const getEmailColor = () => {
    if (emailrend) return { borderBottomColor: '#FF1742' }
    return undefined
  }

  return (
    <View style={styles.mainContainer}>
      {Platform.OS === 'ios' && <View style={styles.statusBar} />}
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backArrowContainer}>
          <Image source={Images.leftArrow} style={styles.backArrow} />
        </TouchableOpacity>

        <View style={styles.section}>
          <Image source={Images.newzeraPurpleLogo} style={styles.logo} />
          <View style={[styles.section, styles.topSection]}>
            <View style={styles.TextInputWidth}>
              <InputTextt placeholder="Full name" captureText={() => {}} />
            </View>
            <View style={[styles.TextInputMargin, styles.TextInputWidth]}>
              <InputTextt
                placeholder="Email / Phone No."
                borderBottomStyle={getEmailColor()}
                captureText={(val) => performValidation(val, true, 'email')}
              />
              <View style={styles.warningContainer}>
                <Text style={styles.warningText}>{emailtext}</Text>
              </View>
            </View>
            <View style={[styles.textMarginWarning, styles.TextInputWidth]}>
              <PasswordText
                placeholder="Password"
                captureText={(val) => performValidation(val, true, 'password')}
                onFocus={() => onFocus()}
                onBlur={() => onBlur()}
                borderBottomStyle={
                  passwordStrengthBorder ? { borderBottomColor: passwordStrengthBorder } : undefined
                }
              />
              {checkpassword() === true && (
                <Image source={Images.checkMark} style={styles.checkmark} />
              )}
              <View style={styles.warningContainer}>
                {(isfocussed === true || type < 1) && (
                  <View style={styles.dirRow}>
                    <Text style={getStyle(type)}>{strength} </Text>
                    <Text style={[styles.warningText, getColor(type)]}>{passwordtext}</Text>
                    {/* {type === 2 && <Image source={Images.checkMark} style={styles.checkmark} />} */}
                  </View>
                )}
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
        </View>
        <View style={[styles.section, styles.checkBoxSection]}>
          <Checkbox onPress={() => setcheckBox(!checkBox)} />
          <Text style={styles.checkBoxLabelMain}>
            I accept the <Text style={styles.checkBoxLabelTerms}>Terms of Use</Text> &{' '}
            <Text style={styles.checkBoxLabelTerms}>Privacy Policy.</Text>
          </Text>
        </View>
        <View style={[styles.section, styles.bottomSection]}>
          <MediumButton
            title="Continue"
            disabled={!checkButtonStatus()}
            onPress={checkButtonStatus() === true ? () => navigation.navigate('ModalScreen') : null}
          />

          <View style={styles.sectionRow}>
            <Text style={styles.signInTextMain}>Already a user? </Text>
            <ClickableText
              textStyle={styles.signInTextLogin}
              onPress={() => navigation.navigate('LoginScreen')}
              text="Log in"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
export default SignUp
