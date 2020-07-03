// @flow

import React, { useState } from 'react'
import { View, TouchableOpacity } from 'react-native'
import styles, { scaleHeight } from './ScreenStyles/CommentBarChatStyles'
import Delete from '../../Images/Icons/Delete icon.svg'
import DeleteMessage from './DeleteMessage'

const Commentbar2 = () => {
  const [DeletePopUpVisible, setDeletePopUpVisible] = useState(false)
  const [containerStyle] = useState({ height: 90 * scaleHeight })

  const openDeletePopUp = () => {
    setDeletePopUpVisible(true)
    console.log('Delete PopUp running')
  }
  const closeDeletePopUp = () => {
    setDeletePopUpVisible(false)
    console.log('Delete PopUp closed')
  }
  const btnPressHandler = () => {
    setDeletePopUpVisible(false)
  }
  const captureOption = (arr: Array<String>) => {
    console.log(arr)
  }

  return (
    <View style={[styles.container, containerStyle]} elevation={-1}>
      <TouchableOpacity style={styles.attachIcon} onPress={openDeletePopUp}>
        <Delete height="100%" />
      </TouchableOpacity>
      <DeleteMessage
        isModalVisible={DeletePopUpVisible}
        onClose={closeDeletePopUp}
        getOption={captureOption}
        onBtnPress={btnPressHandler}
      />
    </View>
  )
}

export default Commentbar2
