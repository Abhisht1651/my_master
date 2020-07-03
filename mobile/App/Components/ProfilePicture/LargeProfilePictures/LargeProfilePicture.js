// @flow

import React from 'react'
import { TouchableOpacity, Image, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Images from '../../../Themes/Images'
import styles from '../../Styles/ProfilePictureStyles/LargeProfilePictureStyles/LargeProfilePictureStyle'

type Props = {
  image: Image,
  type: number,
  onPress: () => {}
}

const LargeProfilePicture = (props: Props) => {
  const { image, type, onPress } = props
  let component = {}

  if (type === 2) {
    component = (
      <LinearGradient
        colors={['#46C3F4', '#B27CF3']}
        style={styles.linearGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}>
        <TouchableOpacity style={styles.container2} activeOpacity={1} onPress={onPress}>
          <Image source={image} style={styles.image2} />
        </TouchableOpacity>
      </LinearGradient>
    )
  } else if (type === 3) {
    component = (
      <TouchableOpacity activeOpacity={1} style={styles.imageStyle3} onPress={onPress}>
        <Image source={image} style={styles.imageStyle3} />
        <View activeOpacity={1} style={styles.online} />
      </TouchableOpacity>
    )
  } else if (type === 4) {
    component = (
      <LinearGradient
        colors={['#46C3F4', '#B27CF3']}
        style={styles.linearGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}>
        <TouchableOpacity activeOpacity={1} style={styles.container4} onPress={onPress}>
          <Image source={image} style={styles.imageStyle4} />
        </TouchableOpacity>
        <View activeOpacity={1} style={styles.online} />
      </LinearGradient>
    )
  } else {
    component = (
      <TouchableOpacity style={styles.container1} activeOpacity={1} onPress={onPress}>
        <Image source={image} style={styles.image1} />
      </TouchableOpacity>
    )
  }

  return <View>{component}</View>
}
LargeProfilePicture.defaultProps = {
  image: Images.profilePictureSmall,
  type: 4,
  onPress: () => {}
}

export default LargeProfilePicture
