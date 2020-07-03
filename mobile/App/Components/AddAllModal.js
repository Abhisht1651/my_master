// @flow

import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal'
import styles from './Styles/AddAllModalStyle'
import { MediumButton } from './Buttons/MediumButton'
import CloseDarkSVG from '../Images/Icons/icon-close-dark.svg'

type Props = {
  isModalVisible: boolean,
  onPressed: PropTypes.func
  // onClosePress: PropTypes.func
}

const AddAllModal = (props: Props) => {
  const { isModalVisible, onPressed } = props
  return (
    <View style={styles.container}>
      <Modal isVisible={isModalVisible} onBackdropPress={onPressed}>
        <View style={styles.modal}>
          <TouchableOpacity style={styles.closeIcon} onPress={onPressed}>
            <CloseDarkSVG />
          </TouchableOpacity>
          <Text style={styles.addAll}>Add All</Text>
          <Text style={styles.sureText}>Are you sure you want to add all friends?</Text>
          <View style={styles.continueButton}>
            <MediumButton
              title="Continue"
              onPress={onPressed}
              outline={false}
              style={styles.button}
              disabled={false}
            />
          </View>
        </View>
      </Modal>
    </View>
  )
}

AddAllModal.defaultProps = {
  isModalVisible: false,
  onPressed: () => {}
}

export default AddAllModal
