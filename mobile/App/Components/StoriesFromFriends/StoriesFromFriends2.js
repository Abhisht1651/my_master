// @flow

import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import LinearGradient from 'react-native-linear-gradient'
import { Images } from '../../Themes'
import styles from '../Styles/StoriesFromFriendsStyles/StoriesFromFriends2Style'

type Props = {
  image1: Image,
  image2: Image,
  name: string,
  onPress: PropTypes.func,
  seen: boolean
}

const StoriesFromFriends2 = (props: Props) => {
  const { image1, image2, name, onPress, seen } = props
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {!seen && (
        <LinearGradient
          colors={['#46C3F4', '#B27CF3']}
          style={styles.linearGradient}
          start={{ x: 1, y: 0 }}
          end={{ x: 1, y: 1 }}>
          <TouchableOpacity style={styles.profilePicture1} activeOpacity={1}>
            <Image source={image1} style={styles.image1} />
          </TouchableOpacity>
        </LinearGradient>
      )}
      {seen && (
        <TouchableOpacity style={styles.profilePicture2} activeOpacity={1}>
          <Image source={image1} style={styles.image2} />
        </TouchableOpacity>
      )}
      {!seen && <View style={styles.TriangleShapeCSS1} />}
      {seen && <View style={styles.TriangleShapeCSS2} />}
      {!seen && (
        <TouchableOpacity activeOpacity={1} style={styles.positon}>
          <LinearGradient
            colors={['#46C3F4', '#B27CF3']}
            style={styles.storyIcon1}
            start={{ x: 1, y: 0 }}
            end={{ x: 1, y: 1 }}>
            <View style={styles.smallImageContainer1}>
              <Image source={image2} style={styles.storyImage1} />
            </View>
          </LinearGradient>
        </TouchableOpacity>
      )}
      {seen && (
        <TouchableOpacity activeOpacity={1} style={styles.storyIcon2}>
          <View style={styles.smallImageContainer2}>
            <Image source={image2} style={styles.storyImage2} />
            <Image source={image2} style={styles.secondaryImage} />
          </View>
        </TouchableOpacity>
      )}

      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  )
}

StoriesFromFriends2.defaultProps = {
  image1: Images.flagPicture,
  image2: Images.profilePicture3,
  name: 'Name',
  onPress: () => {}
}

export default StoriesFromFriends2
