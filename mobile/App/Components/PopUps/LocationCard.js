// @flow

import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from '../Styles/PopUpStyles/LocationCardStyle'
import Images from '../../Themes/Images'
import CurrentLocationIcon from '../../Images/Icons/icon-currentlocation.svg'

type Props = {
  location: string,
  onBtnPress: () => void,
  onClose: () => void
}

const LocationCard = (props: Props) => {
  const { location, onBtnPress, onClose } = props
  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.closeIconContainer} activeOpacity={1} onPress={onClose}>
        <Image source={Images.closeIconPurple} style={styles.closeIcon} />
      </TouchableOpacity>
      <View style={styles.addressContainer}>
        <Text style={styles.currentLocationText}>Current location</Text>
        <Text style={styles.addresstext}>{location}</Text>
      </View>
      <View style={styles.currentLocationIconContainer}>
        <CurrentLocationIcon />
      </View>
      <TouchableOpacity
        style={styles.continueButtonContainer}
        activeOpacity={1}
        onPress={onBtnPress}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  )
}

LocationCard.defaultProps = {
  location: 'Rajiv Chowk, Gurgao, India.'
}

export default LocationCard
