import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import styles from '../Styles/ProfilePictureStyles/DisplayScreenStyle'
import XLargeProfilePicture from './XLargeProfilePicture/XLargeProfilePicture'
import LargeProfilePicture from './LargeProfilePictures/LargeProfilePicture'
import MediumProfilePicture from './MediumProfilePictures/MediumProfilePicture'
import SmallProfilePicture from './SmallProfilePictures/SmallProfilePicture'

const DisplayScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text>XLargeProfilePicture</Text>
          <XLargeProfilePicture />
        </View>

        <View style={styles.box}>
          <Text>LargeProfilePicture </Text>
          <LargeProfilePicture />
        </View>

        <View style={styles.box}>
          <Text>MediumProfilePicture </Text>
          <MediumProfilePicture />
        </View>

        <View style={styles.box}>
          <Text>SmallProfilePicture</Text>
          <SmallProfilePicture />
        </View>
      </View>
    </ScrollView>
  )
}

export default DisplayScreen
