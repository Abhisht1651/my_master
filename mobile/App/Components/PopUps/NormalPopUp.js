// @flow
import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import Images from '../../Themes/Images'
import styles from '../Styles/PopUpStyles/NormalPopUpStyle'

type Props = {
  headerText: string,
  infoText: string,
  btnText: string,
  onBtnPress: () => void,
  onClose: () => void
}

const NormalPopUp = (props: Props) => {
  const { headerText, infoText, btnText, onBtnPress, onClose } = props
  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.closeIconContainer} activeOpacity={1} onPress={onClose}>
        <Image source={Images.closeIconPurple} style={styles.closeIcon} />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>{headerText}</Text>
        <Text style={styles.infoText}>{infoText}</Text>
      </View>
      <TouchableOpacity style={styles.buttonContainer} activeOpacity={1} onPress={onBtnPress}>
        <Text style={styles.buttonText}>{btnText}</Text>
      </TouchableOpacity>
    </View>
  )
}

NormalPopUp.defaultProps = {
  headerText: 'Normal PopUp',
  infoText: 'This is about the PopUp!',
  btnText: 'Continue'
}

export default NormalPopUp
