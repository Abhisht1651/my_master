// @flow

import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, ImageProps } from 'react-native'
import PropTypes from 'prop-types'
import styles from '../Styles/ListOfUserStyles/ListOfUsersStyle'
import images from '../../Themes/Images'
import MediumProfilePicture from '../ProfilePicture/MediumProfilePictures/MediumProfilePicture'

type Props = {
  name: string,
  optionalText: string,
  image: ImageProps,
  buttonText: string,
  buttonTextAfterPress: string,
  type: number,
  onPress: PropTypes.func,
  profileType: number,
  onCancelPress: PropTypes.func,
  needoptiontext: boolean
}

const ListOfUsers = (props: Props) => {
  const {
    name,
    optionalText,
    image,
    buttonText,
    buttonTextAfterPress,
    type,
    onPress,
    profileType,
    onCancelPress,
    needoptiontext
  } = props

  const [buttonPressed, setButtonPressed] = useState(false)
  const [buttonStyle, setButtonStyle] = useState({ borderColor: '#7B46E4' })
  const [textStyle, setTextStyle] = useState({ color: '#7B46E4' })
  const [btnText, setBtnText] = useState(buttonText)

  useEffect(() => {
    if (buttonPressed) {
      setButtonStyle({ borderColor: '#DCDCE9' })
      setTextStyle({ color: '#8F8FAF' })
      setBtnText(buttonTextAfterPress)
    } else {
      setButtonStyle({ borderColor: '#7B46E4' })
      setTextStyle({ color: '#7B46E4' })
      setBtnText(buttonText)
    }
  }, [buttonPressed])

  const onPressHandler = () => {
    setButtonPressed(!buttonPressed)
    if (buttonPressed) onCancelPress()
    else if (!buttonPressed) onPress()
  }

  return (
    <View style={type === 2 ? styles.container2 : styles.container}>
      <View style={styles.profileContainer}>
        <TouchableOpacity style={styles.imageContainer} activeOpacity={1}>
          <MediumProfilePicture type={profileType} image={image} />
        </TouchableOpacity>
        <View style={styles.textBlock}>
          <Text style={styles.nameText}>{name}</Text>
          {(optionalText && type === 1) || needoptiontext ? (
            <Text style={styles.optionalText}>{optionalText}</Text>
          ) : null}
        </View>
      </View>
      <View style={type === 1 ? styles.btnContainer1 : styles.btnContainer2}>
        <TouchableOpacity
          activeOpacity={1}
          style={[styles.button, buttonStyle]}
          onPress={onPressHandler}>
          <Text style={[styles.buttonText, textStyle]}>{btnText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

ListOfUsers.defaultProps = {
  name: 'Name',
  optionalText: 'Optional Text',
  image: images.voterIcon2,
  buttonText: 'Add',
  buttonTextAfterPress: 'Added',
  type: 1,
  profileType: 1,
  onPress: () => {},
  onCancelPress: () => {},
  needoptiontext: false
}

export default ListOfUsers
