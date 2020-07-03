// @flow

import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from '../Styles/NewConversationListStyles'
import Images from '../../Themes/Images'
import useHooks from './NewConversationHooks'

type Props = {
  name: string,
  image: Image
}

const NewConversationList = (props: Props) => {
  const { name, image } = props

  const { checked, onPressHandler } = useHooks()

  return (
    <TouchableOpacity onPress={onPressHandler}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image} />
        </View>
        <View style={styles.textBlock}>
          <Text style={styles.nameText}>{name}</Text>
        </View>
        <View style={styles.btnContainer}>
          <View style={styles.checkBox}>
            {checked && (
              <View style={styles.checkedBox}>
                <Image source={Images.checkmark} />
              </View>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

NewConversationList.defaultProps = {
  name: '',
  image: Images.listOfUsersImage
}

export default NewConversationList
