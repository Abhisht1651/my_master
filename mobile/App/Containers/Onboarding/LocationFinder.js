// @flow
import { NavigationContainerProps } from '@react-navigation/native'
import React from 'react'
import { Text, Image, View, TouchableOpacity, Platform } from 'react-native'
import CurrentLocationIcon from '../../Images/Icons/icon-currentlocation.svg'
import styles from '../Styles/Onboarding/LocationFinderStyles'
import Images from '../../Themes/Images'
// Styles
type Props = NavigationContainerProps & {}

const LocationFinder = (props: Props) => {
  return (
    <View style={styles.centeredView}>
      {Platform.OS === 'ios' && <View style={styles.statusBar} />}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={styles.backArrowContainer}>
          <Image source={Images.leftArrow} style={styles.backArrow} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <View>
            <Image source={Images.closeIconPurple} style={styles.cross} />
          </View>
        </TouchableOpacity>
      </View>

      <Text style={styles.modalText}>Looking For Your Current Location</Text>
      <CurrentLocationIcon />
    </View>
  )
}
export default LocationFinder
