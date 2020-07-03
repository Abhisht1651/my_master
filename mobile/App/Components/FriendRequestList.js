// @flow
import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './Styles/FriendRequestListStyle'
import { X3SButton } from './Buttons/X3SButton'
import Images from '../Themes/Images'
import MediumProfilePicture from './ProfilePicture/MediumProfilePictures/MediumProfilePicture'

type Props = {
  item: {
    name: string,
    optionalText: string,
    daysText: string,
    image: Image,
    online: boolean,
    id: string
  },
  onAcceptPress: PropTypes.func,
  onIgnorePress: PropTypes.func
}

const FriendRequestList = (props: Props) => {
  const { item, onAcceptPress, onIgnorePress } = props
  return (
    <View style={item.online ? styles.containerwhite : styles.container}>
      <View style={item.online ? styles.dot : styles.dotwhite} />
      <TouchableOpacity style={styles.imageContainer} activeOpacity={1}>
        <MediumProfilePicture image={item.image} />
      </TouchableOpacity>
      <View style={styles.textBlock}>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.optionalText}>{item.optionalText}</Text>
        <View style={styles.btnContainer}>
          <View style={styles.button}>
            <X3SButton style={styles.buttonStyle} title="Accept" onPress={onAcceptPress} />
          </View>
          <View style={styles.button}>
            <X3SButton style={styles.buttonStyle} outline title="Ignore" onPress={onIgnorePress} />
          </View>
        </View>
      </View>
      <View style={styles.daysTextContainer}>
        <Text style={styles.daysText}>{item.daysText}</Text>
      </View>
    </View>
  )
}

FriendRequestList.defaultProps = {
  item: {
    name: 'Armando Santanera',
    optionalText: '48 Friends in Common',
    daysText: '1 day ago',
    image: Images.profilePicture,
    online: true,
    id: ''
  },
  onAcceptPress: () => {},
  onIgnorePress: () => {}
}

export default FriendRequestList
