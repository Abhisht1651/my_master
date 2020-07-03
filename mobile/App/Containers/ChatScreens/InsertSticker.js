// @flow
import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, Modal, Image } from 'react-native'
import Images from '../../Themes/Images'

// Styles
import styles from './ScreenStyles/InsertStickerStyles'

type Props = {
  isModalVisible: boolean,
  onClose: () => void
}

const InsertSticker = (props: Props) => {
  const { isModalVisible, onClose } = props
  return (
    <Modal visible={isModalVisible} transparent>
      <View style={styles.screen}>
        <View style={styles.innerScreen}>
          <View style={styles.view1}>
            <Text style={styles.headerText}>Insert Sticker</Text>
            <TouchableOpacity style={styles.closeIconContainer} activeOpacity={1} onPress={onClose}>
              <Image source={Images.closeIcon} style={styles.closeIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.view2}>
            <ScrollView>
              <View style={styles.topgap} />
              <View style={styles.rows}>
                <View style={styles.square} />
                <View style={styles.gap} />
                <View style={styles.square} />
                <View style={styles.gap} />
                <View style={styles.square} />
              </View>
              <View style={styles.verticalgap} />
              <View style={styles.rows}>
                <View style={styles.square} />
                <View style={styles.gap} />
                <View style={styles.square} />
                <View style={styles.gap} />
                <View style={styles.square} />
              </View>
              <View style={styles.verticalgap} />
              <View style={styles.rows}>
                <View style={styles.square} />
                <View style={styles.gap} />
                <View style={styles.square} />
                <View style={styles.gap} />
                <View style={styles.square} />
              </View>
            </ScrollView>
          </View>
        </View>
        <View style={styles.innerScreen2} />
      </View>
    </Modal>
  )
}
InsertSticker.defaultProps = {
  isModalVisible: true
}

export default InsertSticker
