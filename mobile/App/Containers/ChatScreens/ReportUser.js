// @flow
import React, { useState } from 'react'
import { View, Text, Modal, TouchableOpacity, Image } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import Images from '../../Themes/Images'
import styles from './ScreenStyles/ReportUserStyles'

type Props = {
  isModalVisible: boolean,
  action: () => void
}

const ReportUserPopUp = (props: Props) => {
  const [checked1, setChecked1] = useState(false)
  const [checked2, setChecked2] = useState(false)
  const [checked3, setChecked3] = useState(false)
  const { isModalVisible, action } = props

  const clickHandler = (arg: number) => {
    switch (arg) {
      case 1:
        setChecked1(!checked1)
        break
      case 2:
        setChecked2(!checked2)
        break
      case 3:
        setChecked3(!checked3)
        break
      default:
        break
    }
  }
  return (
    <Modal visible={isModalVisible} transparent>
      <View style={styles.modalStyle}>
        <View style={styles.card}>
          <TouchableOpacity onPress={action} style={styles.closeIconContainer} activeOpacity={1}>
            <Image source={Images.closeIcon} style={styles.imageStyle} />
          </TouchableOpacity>
          <View style={styles.textContainer}>
            <Text style={styles.text1}>Report a user</Text>
            <Text style={styles.text2}>Tell us more why you want to report this user.</Text>
          </View>
          <View style={styles.optionsContainer}>
            <TouchableOpacity
              style={styles.options}
              activeOpacity={1}
              onPress={() => clickHandler(1)}>
              <View style={styles.checkBox}>{checked1 && <Image source={Images.checkmark} />}</View>
              <Text style={styles.optionText}>This person is using their account for spam.</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.options}
              activeOpacity={1}
              onPress={() => clickHandler(2)}>
              <View style={styles.checkBox}>{checked2 && <Image source={Images.checkmark} />}</View>
              <Text style={styles.optionText}>
                This person is posting inappropiate or vulgar content.
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.options}
              activeOpacity={1}
              onPress={() => clickHandler(3)}>
              <View style={styles.checkBox}>{checked3 && <Image source={Images.checkmark} />}</View>
              <Text style={styles.optionText}>
                This person is being abusive towards or threatening other users.
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.textBoxContainer}>
            <TextInput
              multiline
              selectionColor="#7B46E4"
              style={styles.textBox}
              placeholder="Add comments about why you are reporting this user,"
              placeholderTextColor="#9A9AB8"
            />
          </View>
          <TouchableOpacity onPress={action} style={styles.submitButtonContainer} activeOpacity={1}>
            <Text style={styles.submitButtonText}>Report</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

export default ReportUserPopUp
