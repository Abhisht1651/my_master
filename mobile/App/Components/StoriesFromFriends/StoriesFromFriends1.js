// @flow
import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import Images from '../../Themes/Images'
import styles from '../Styles/StoriesFromFriendsStyles/StoriesFromFriends1Style'

type Props = {
  image: Image,
  name: string,
  onPress: PropTypes.func
}

const StoriesFromFriends1 = (props: Props) => {
  const { image, name, onPress } = props
  return (
    <TouchableOpacity style={styles.container} activeOpacity={1} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <View style={styles.TriangleShapeCSS} />
      <TouchableOpacity style={styles.addIcon} activeOpacity={1}>
        <View style={styles.verticalPart} />
        <View style={styles.horizontalPart} />
      </TouchableOpacity>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  )
}

StoriesFromFriends1.defaultProps = {
  image: Images.profilePicture1,
  name: 'You',
  onPress: () => {}
}

export default StoriesFromFriends1
