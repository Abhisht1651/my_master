/* eslint-disable react/jsx-props-no-spreading */
// @flow
import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Modal, Image, TextInput } from 'react-native'
import Images from '../../Themes/Images'
import Colors from '../../Themes/Colors'
import { MediumThinButton } from '../../Components/Buttons/MediumThinButton'

// Styles
import styles from './ScreenStyles/RenameGroupStyles'

type Props = {
  captureText: (arg: string) => void,
  isModalVisible: boolean,
  onBtnPress: () => void,
  onClose: () => void
}

const RenameGroup = (props: Props) => {
  const [value, setValue] = useState('')

  const { captureText, isModalVisible, onBtnPress, onClose } = props
  useEffect(() => {
    captureText(value)
  }, [value])

  const changeTextHandler = (text: string) => {
    setValue(text)
  }
  const textColorStyle = {
    color: '#000080'
  }
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
            <Text style={styles.headerText}>Rename Group</Text>
          </View>
          <View style={styles.innerContainer}>
            <TextInput
              placeholder="Write something..."
              multiline
              placeholderTextColor="#8F8FAF"
              selectionColor={Colors.cursor}
              maxLength={75}
              spellCheck={false}
              autoCorrect={false}
              value={value}
              style={[styles.innerContainerText, textColorStyle]}
              onChangeText={changeTextHandler}
            />
          </View>
          <View style={styles.view3}>
            <MediumThinButton title="Save" onPress={onBtnPress} />
          </View>
        </View>
      </View>
    </Modal>
  )
}
RenameGroup.defaultProps = {
  isModalVisible: true
}

export default RenameGroup
