// @flow
import React from 'react'
import { View, Text, TouchableOpacity, Modal, Image } from 'react-native'
import Images from '../../Themes/Images'
import { MediumThinnerButton } from '../../Components/Buttons/MediumThinnerButton'

// Styles
import styles from './ScreenStyles/AttachContentStyles'

type Props = {
  isModalVisible: boolean,
  onClose: () => void
}

const AttachContent = (props: Props) => {
  const { isModalVisible, onClose } = props
  return (
    <Modal visible={isModalVisible} transparent>
      <View style={styles.screen}>
        <View style={styles.innerScreen}>
          <View style={styles.view1}>
            <Text style={styles.headerText}>Attach Content</Text>
            <TouchableOpacity style={styles.closeIconContainer} activeOpacity={1} onPress={onClose}>
              <Image source={Images.closeIcon} style={styles.closeIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.view2}>
            <View style={styles.space2} />
            <MediumThinnerButton title="Storyline" outline />
            <View style={styles.space} />
            <MediumThinnerButton title="Entity" outline />
            <View style={styles.space} />
            <MediumThinnerButton title="Poll" outline />
            <View style={styles.space} />
            <MediumThinnerButton title="Media" outline />
          </View>
        </View>
        <View style={styles.innerScreen2} />
      </View>
    </Modal>
  )
}
AttachContent.defaultProps = {
  isModalVisible: true
}

export default AttachContent
