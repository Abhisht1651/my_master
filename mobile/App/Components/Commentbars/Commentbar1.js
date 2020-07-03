// @flow

import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity, TextInput } from 'react-native'
import PropTypes from 'prop-types'
import styles, { scaleHeight } from '../Styles/CommentbarStyles/Commentbar1Style'
import Sticker from '../../Images/Icons/icon-sticker-colored.svg'
import Attach from '../../Images/Icons/icon-attach.svg'
import Camera from '../../Images/Icons/icon-camera-outline.svg'

type Props = {
  captureText: (arg: string) => void,
  placeholderText: string,
  onTouchStart: PropTypes.func
}

const Commentbar1 = (props: Props) => {
  const [value, setValue] = useState('')
  const [newStyle, setNewStyle] = useState({ height: 39.86 * scaleHeight })
  const [containerStyle, setContainerStyle] = useState({ height: 90 * scaleHeight })

  const { captureText, placeholderText, onTouchStart } = props

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

  return (
    <View style={[styles.container, containerStyle]} elevation={-1}>
      <TouchableOpacity style={styles.attachIcon}>
        <Attach height="100%" />
      </TouchableOpacity>
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
          onTouchStart={onTouchStart}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.stickerIcon}>
        <Sticker height="100%" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.cameraIcon}>
        <Camera height="100%" />
      </TouchableOpacity>
    </View>
  )
}

Commentbar1.defaultProps = {
  placeholderText: 'Type Something',
  onTouchStart: () => {}
}

export default Commentbar1
