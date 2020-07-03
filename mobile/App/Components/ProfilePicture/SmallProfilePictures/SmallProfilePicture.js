// @flow

import React from 'react'
import { TouchableOpacity, Image, View } from 'react-native'
import Images from '../../../Themes/Images'
import styles from '../../Styles/ProfilePictureStyles/SmallProfilePictureStyles/SmallProfilePictureStyle'

type Props = {
  image: Image,
  type: number,
  onPress: () => {}
}

const SmallProfilePicture = (props: Props) => {
  const { image, type, onPress } = props
  let component = {}
  if (type === 1) {
    component = (
      <TouchableOpacity style={styles.container1} activeOpacity={1} onPress={onPress}>
        <Image source={image} style={styles.image} />
      </TouchableOpacity>
    )
  } else {
    component = (
      <TouchableOpacity style={styles.container2} activeOpacity={1} onPress={onPress}>
        <Image source={image} style={styles.image} />
      </TouchableOpacity>
    )
  }
  return <View>{component}</View>
}
SmallProfilePicture.defaultProps = {
  image: Images.profilePicture,
  type: 1,
  onPress: () => {}
}

export default SmallProfilePicture
