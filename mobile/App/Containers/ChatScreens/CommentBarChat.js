// @flow

import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity, TextInput } from 'react-native'
import styles, { scaleHeight } from './ScreenStyles/CommentBarChatStyles'
import Sticker from '../../Images/Icons/icon-sticker-colored.svg'
import Attach from '../../Images/Icons/icon-attach.svg'
import Camera from '../../Images/Icons/icon-camera-outline.svg'
import AttachContent from './AttachContent'
import InsertSticker from './InsertSticker'

type Props = {
  captureText: (arg: string) => void,
  placeholderText: string
}

const Commentbar1 = (props: Props) => {
  const [AttachPopUpVisible, setAttachPopUpVisible] = useState(false)
  const [StickerPopUpVisible, setStickerPopUpVisible] = useState(false)
  const [value, setValue] = useState('')
  const [newStyle, setNewStyle] = useState({ height: 39.86 * scaleHeight })
  const [containerStyle, setContainerStyle] = useState({ height: 90 * scaleHeight })

  const { captureText, placeholderText } = props

  useEffect(() => {
    captureText(value)
  }, [value])

  const changeTextHandler = (text: string) => {
    setValue(text)
  }
  const updateSize = (newHeight) => {
    setNewStyle({
      height: newHeight + scaleHeight * 21.86
    })
    setContainerStyle({
      height: newHeight + scaleHeight * 50.14
    })
  }
  const openAttachPopUp = () => {
    setAttachPopUpVisible(true)
    console.log('Attach PopUp running')
  }
  const closeAttachPopUp = () => {
    setAttachPopUpVisible(false)
    console.log('Attach PopUp Close')
  }
  const openStickerPopUp = () => {
    setStickerPopUpVisible(true)
    console.log('Sticker PopUp running')
  }
  const closeStickerPopUp = () => {
    setStickerPopUpVisible(false)
    console.log('Sticker PopUp Close')
  }

  return (
    <View style={[styles.container, containerStyle]} elevation={-1}>
      <TouchableOpacity style={styles.attachIcon} onPress={openAttachPopUp}>
        <Attach height="100%" />
      </TouchableOpacity>
      <AttachContent isModalVisible={AttachPopUpVisible} onClose={closeAttachPopUp} />
      <TouchableOpacity style={[styles.textInput, newStyle]}>
        <TextInput
          placeholder={placeholderText}
          placeholderTextColor="rgba(27, 32, 98, 0.3)"
          style={styles.comment}
          selectionColor="#7B46E4"
          multiline
          maxLength={150}
          spellCheck={false}
          autoCorrect={false}
          onChangeText={changeTextHandler}
          onContentSizeChange={(e) => updateSize(e.nativeEvent.contentSize.height)}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.stickerIcon} onPress={openStickerPopUp}>
        <Sticker height="100%" />
      </TouchableOpacity>
      <InsertSticker isModalVisible={StickerPopUpVisible} onClose={closeStickerPopUp} />
      <TouchableOpacity style={styles.cameraIcon}>
        <Camera height="100%" />
      </TouchableOpacity>
    </View>
  )
}

Commentbar1.defaultProps = {
  placeholderText: 'Type Something'
}

export default Commentbar1
