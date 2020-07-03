// @flow
import React from 'react'
import { View, Text, Modal, TouchableOpacity, Image } from 'react-native'
import Images from '../../Themes/Images'
import styles from './ScreenStyles/BlockUserStyles'

type Props = {
  isModalVisible: boolean,
  closeAction: () => void,
  blockAction: () => void
}
const BlockProfilePopUp = (props: Props) => {
  const { isModalVisible, closeAction, blockAction } = props
  return (
    <Modal visible={isModalVisible} transparent>
      <View style={styles.modalStyle}>
        <View style={styles.card}>
          <TouchableOpacity
            onPress={closeAction}
            style={styles.closeIconContainer}
            activeOpacity={1}>
            <Image source={Images.closeIcon} style={styles.imageStyle} />
          </TouchableOpacity>
          <View style={styles.textContainer}>
            <Text style={styles.text1}>Block Profile</Text>
            <Text style={styles.text2}>Are you sure you want to block this profile?</Text>
            <Text style={styles.infoText}>
              They won’t be able to see your posts, activities or stories. Newzera won’t let them
              know you blocked them.
            </Text>
          </View>
          <TouchableOpacity
            onPress={blockAction}
            style={styles.blockButtonContainer}
            activeOpacity={1}>
            <Text style={styles.blockButtonText}>Block</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

export default BlockProfilePopUp
