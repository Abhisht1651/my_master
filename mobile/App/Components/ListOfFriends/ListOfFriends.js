// @flow

import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import PropTypes from 'prop-types'
import styles from '../Styles/ListOfFriendsStyles/ListOfFriendsStyle'
import Images from '../../Themes/Images'

type Props = {
  image: Image,
  name: string,
  onPress: PropTypes.func,
  onCancelPress: PropTypes.func,
  btnText1: string,
  btnText2: string
}

const ListOfFriends = (props: Props) => {
  const { image, name, onPress, onCancelPress, btnText1, btnText2 } = props

  const [buttonPressed, setButtonPressed] = useState(false)
  const [buttonStyle, setButtonStyle] = useState({ borderColor: '#7B46E4' })
  const [textStyle, setTextStyle] = useState({ color: '#7B46E4' })
  const [buttonText, setButtonText] = useState(btnText1)

  useEffect(() => {
    if (buttonPressed) {
      setButtonStyle({ borderColor: '#DCDCE9' })
      setTextStyle({ color: '#8F8FAF' })
      setButtonText(btnText2)
    } else {
      setButtonStyle({ borderColor: '#7B46E4' })
      setTextStyle({ color: '#7B46E4' })
      setButtonText(btnText1)
    }
  }, [buttonPressed])

  const onPressHandler = () => {
    setButtonPressed(!buttonPressed)
    if (buttonPressed) onCancelPress()
    else if (!buttonPressed) onPress()
  }
  return (
    <View style={styles.container}>
      <View style={styles.photo}>
        <Image style={styles.image} source={image} />
      </View>
      <View style={styles.name}>
        <Text style={styles.nameText}>{name}</Text>
      </View>
      <TouchableOpacity
        style={[styles.button, buttonStyle]}
        activeOpacity={1}
        onPress={onPressHandler}>
        <Text style={[styles.buttonText, textStyle]}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  )
}

ListOfFriends.defaultProps = {
  image: Images.picture,
  name: 'Name',
  btnText1: 'Add',
  btnText2: 'Requested',
  onPress: () => {},
  onCancelPress: () => {}
}

export default ListOfFriends
