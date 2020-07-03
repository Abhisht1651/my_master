// @flow

import { NavigationContainerProps } from '@react-navigation/native'
import React, { useState } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity, Platform } from 'react-native'

import HideWithKeyboard from 'react-native-hide-with-keyboard'
import ImagePicker from 'react-native-image-picker'
import LinearGradient from 'react-native-linear-gradient'
import { responsiveScreenHeight } from 'react-native-responsive-dimensions'
import Header from '../../Components/Header'
import InputTextt from '../../Components/TextInput/TextInputComponent'
import TextBox from '../../Components/Textbox/SmallTextBox'
import DropDown from '../../Components/Dropdowns/DropDown1'
import SearchSuggestion from '../../Components/SearchSuggestion/SearchSuggestion2'
import { LargeButton } from '../../Components/Buttons/LargeButton'

// Styles
import styles from '../Styles/Onboarding/SignUpDetailsStyles'

import { Images } from '../../Themes'
import PP from '../../Images/Icons/ProfilePicture.svg'

type Props = NavigationContainerProps & {}
// type State = {
//   response: string
// }

const SignUpDetails = (props: Props) => {
  const [response, setresponse] = useState('')

  // https://www.youtube.com/watch?v=Gq8udJJ724Y(Important video to install image picker)
  const options = {
    title: 'Image Picker',
    takePhotoButtonTitle: 'Take Photo',
    chooseFromLibraryButtonTitle: 'Choose Photo',
    noData: true
  }
  const pickImage = () => {
    ImagePicker.showImagePicker(options, (resp) => {
      if (resp.didCancel) {
        // console.log('User cancelled image picker')
      } else if (resp.error) {
        // console.log('Image Picker Error: ', response.error)
      } else {
        setresponse(resp)
      }
    })
  }
  return (
    <View style={styles.headerPosition}>
      {Platform.OS === 'ios' && <View style={styles.statusBar} />}
      <Header
        container={{ backgroundColor: 'white' }}
        count={1}
        onPressBack={() => props.navigation.goBack()}
        rightText="Skip"
      />
      <View style={styles.shadow} />
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>Personalize your profile</Text>
        <View style={styles.profileContainer}>
          <View>
            <TouchableOpacity style={styles.profileImageContainer} onPress={pickImage}>
              {response === '' ? (
                <View>
                  <PP height="100%" />
                </View>
              ) : (
                <Image source={{ uri: response.uri }} style={styles.profileImage} />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.profileCameraView}>
            <TouchableOpacity style={styles.profileCameraContainer} onPress={pickImage}>
              <Image source={Images.profileCamera} style={styles.profileCamera} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.marginProfile}>
          <View style={styles.TextInputWidth}>
            <InputTextt placeholder="Full name" captureText={() => {}} />
          </View>
          <View style={[styles.textbox, styles.TextInputMargin]}>
            <TextBox captureText={() => {}} />
          </View>
          <View style={[styles.TextInputMargin, styles.TextInputWidth]}>
            <InputTextt placeholder="Profession" captureText={() => {}} />
            <Text style={styles.hintStyle}>(Optional)</Text>
          </View>
          <View style={[styles.TextInputMargin, styles.TextInputWidth]}>
            <InputTextt placeholder="Date of Birth" captureText={() => {}} />
            <Text style={styles.hintStyle}>(dd/mm/yyyy)</Text>
          </View>
          <View
            style={[
              styles.TextInputMargin,
              styles.TextInputWidth,
              { height: responsiveScreenHeight(4) }
            ]}>
            <DropDown getOption={() => {}} />
          </View>

          <View
            style={[
              styles.TextInputMargin,
              styles.TextInputWidth,
              { height: responsiveScreenHeight(4) }
            ]}>
            <SearchSuggestion />
          </View>
        </View>
        <View style={styles.locationContainer}>
          <Image source={Images.locationIcon} style={styles.locationImage} />
          <Text style={styles.locationText}>Use Current location</Text>
        </View>
      </ScrollView>
      <HideWithKeyboard>
        <LinearGradient colors={['#FFFFFF00', '#F7F7F7']} style={styles.gradient}>
          <LargeButton
            title="Continue"
            onPress={() => props.navigation.navigate('FollowContentScreen')}
          />
        </LinearGradient>
      </HideWithKeyboard>
    </View>
  )
}
export default SignUpDetails
