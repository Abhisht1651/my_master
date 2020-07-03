// @flow
import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Images from '../../../Themes/Images'
import PP from '../../../Images/Icons/ProfilePicture.svg'
import styles from '../../Styles/ProfilePictureStyles/XLargeProfilePictureStyles/XLargeProfilePictureStyle'

type Props = {
  image: Image,
  type: number,
  onPress: () => {}
}
const XLargeProfilePicture = (props: Props) => {
  const { image, type, onPress } = props
  let component = {}
  if (type === 2) {
    component = (
      <View style={styles.container2}>
        <TouchableOpacity activeOpacity={1} style={styles.imageStyle} onPress={onPress}>
          <Image source={image} style={styles.imageStyle2} />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} style={styles.addStory2} onPress={onPress}>
          <Image source={Images.camera2x} style={styles.addStoryIcon2} />
        </TouchableOpacity>
      </View>
    )
  } else if (type === 3) {
    component = (
      <LinearGradient
        colors={['#46C3F4', '#B27CF3']}
        style={styles.linearGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}>
        <TouchableOpacity style={styles.container3} activeOpacity={1} onPress={onPress}>
          <Image source={image} style={styles.image3} />
        </TouchableOpacity>
      </LinearGradient>
    )
  } else if (type === 4) {
    component = (
      <TouchableOpacity activeOpacity={1} style={styles.imageStyle4} onPress={onPress}>
        <Image source={image} style={styles.imageStyle4} />
        <View style={styles.online} />
      </TouchableOpacity>
    )
  } else if (type === 5) {
    component = (
      <LinearGradient
        colors={['#46C3F4', '#B27CF3']}
        style={styles.linearGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}>
        <TouchableOpacity activeOpacity={1} style={styles.container5} onPress={onPress}>
          <Image source={image} style={styles.imageStyle5} />
        </TouchableOpacity>
        <View style={styles.online} />
      </LinearGradient>
    )
  } else {
    component = (
      <TouchableOpacity style={styles.container1} activeOpacity={1} onPress={onPress}>
        {type === 0 ? <PP height="100%" /> : <Image source={image} style={styles.imageStyle4} />}
      </TouchableOpacity>
    )
  }

  return <View>{component}</View>
}
XLargeProfilePicture.defaultProps = {
  image: Images.bitmap2x,
  type: 0,
  onPress: () => {}
}

export default XLargeProfilePicture
