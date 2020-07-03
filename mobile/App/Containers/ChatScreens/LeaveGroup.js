// @flow
import React from 'react'
import { View, Text, TouchableOpacity, Modal, Image } from 'react-native'
import Images from '../../Themes/Images'
import { MediumThinButton } from '../../Components/Buttons/MediumThinButton'

// Styles
import styles from './ScreenStyles/LeaveGroupStyles'

type Props = {
  isModalVisible: boolean,
  onBtnPress: () => void,
  onClose: () => void
}

const LeaveGroup = (props: Props) => {
  const { isModalVisible, onBtnPress, onClose } = props
  return (
    <Modal visible={isModalVisible} transparent>
      <View style={styles.screen}>
        <View style={styles.innerScreen}>
          <View style={styles.view1}>
            <TouchableOpacity style={styles.closeIconContainer} activeOpacity={1} onPress={onClose}>
              <Image source={Images.closeIcon} style={styles.closeIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.view2}>
            <Text style={styles.headerText}>Do you want to leave</Text>
            <Text style={styles.headerText}>the group?</Text>
            <View style={styles.verticalgap} />
            <Text style={styles.headerText2}>You will not be able to see new</Text>
            <Text style={styles.headerText2}>notifications from this chat.</Text>
          </View>
          <View style={styles.view3}>
            <MediumThinButton title="Leave" onPress={onBtnPress} />
          </View>
        </View>
      </View>
    </Modal>
  )
}
LeaveGroup.defaultProps = {
  isModalVisible: true
}

export default LeaveGroup
