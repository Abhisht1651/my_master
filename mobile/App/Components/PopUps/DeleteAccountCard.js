// @flow
import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import Images from '../../Themes/Images'
import styles from '../Styles/PopUpStyles/DeleteAccountCardStyle'

type Props = {
  onBtnPress: () => void,
  onClose: () => void
}

const DeleteAccountCard = (props: Props) => {
  const { onBtnPress, onClose } = props
  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.closeIconContainer} activeOpacity={1} onPress={onClose}>
        <Image source={Images.closeIconPurple} style={styles.closeIcon} />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.deleteAccountText}>Delete account</Text>
        <Text style={styles.infoText}>
          Are you sure you want to delete this account? You can never recover your account in
          future.
        </Text>
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

export default DeleteAccountCard
