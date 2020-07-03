// @flow
import { NavigationContainerProps } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard
} from 'react-native'
import OTPTextView from '../../Components/OTPTextView'
import ClickableText from '../../Components/ClickableText'
import { MediumThinButton } from '../../Components/Buttons/MediumThinButton'
import styles from '../Styles/Onboarding/ModalScreenStyle'
import Images from '../../Themes/Images'
// Styles
type Props = NavigationContainerProps & {}

const ForgotPasswordOTP = (props: Props) => {
  const [otpInput, setotpInput] = useState('')
  const [seconds, setSeconds] = useState(60)
  const [isActive, setIsActive] = useState(true)
  const [isKeyboardVisible, setKeyboardVisible] = useState(false)
  useEffect(() => {
    let interval = null
    if (seconds === 0) {
      setIsActive(false)
    }
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds - 1)
      }, 1000)
    } else if (!isActive && seconds !== 60) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isActive, seconds])

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true) // or some other action
    })
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false) // or some other action
    })
    return () => {
      keyboardDidHideListener.remove()
      keyboardDidShowListener.remove()
    }
  }, [])
  const button = (prop: Props) => {
    const len = otpInput.length
    return (
      <View style={isKeyboardVisible ? styles.modalButtonK : styles.modalButtonNK}>
        <MediumThinButton
          title="Continue"
          disabled={len !== 6}
          onPress={len === 6 ? () => prop.navigation.navigate('SignUpDetails') : null}
        />
      </View>
    )
  }
  return (
    <KeyboardAvoidingView
      style={styles.centeredView}
      behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}>
      {Platform.OS === 'ios' && <View style={styles.statusBar} />}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={styles.backArrowContainer}>
          <Image source={Images.leftArrow} style={styles.backArrow} />
        </TouchableOpacity>
        <Text style={styles.modalHeading}>Verification Code</Text>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <View>
            <Image source={Images.closeIconPurple} style={styles.cross} />
          </View>
        </TouchableOpacity>
      </View>

      <Text style={isKeyboardVisible ? styles.modalTextK : styles.modalText}>
        Please add verification code sent to your email.
      </Text>
      <OTPTextView
        containerStyle={styles.rowView}
        handleTextChange={(text) => setotpInput(text)}
        inputCount={6}
        keyboardType="numeric"
        textInputStyle={styles.inputText}
        changedTextBorder={{ borderBottomWidth: 1, borderColor: '#1F1F60' }}
        offTintStyle={styles.offTint}
      />

      <View style={styles.resendContainer}>
        <View style={styles.rowView}>
          <Text style={styles.coden}>Haven’t received code?</Text>
          <ClickableText textStyle={styles.otpresend} text="Resend" />
        </View>

        <Text style={[styles.otpresend, styles.otpTimer]}>00:{seconds} sec</Text>
      </View>
      {button(props)}
    </KeyboardAvoidingView>
  )
}
export default ForgotPasswordOTP
