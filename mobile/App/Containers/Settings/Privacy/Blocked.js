// @flow

import React from 'react'
import { Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import { NavigationContainerProps } from '@react-navigation/native'

import { Images } from '../../../Themes'

import styles from './Styles/PrivacyPolicyStyle'
// import common from './Styles/CommonStyle'

const Width = Dimensions.get('window').width
const Height = Dimensions.get('window').height

type Props = NavigationContainerProps & {
  name: Array<string>,
  photos: Array<string>
}

export default function Blocked(props: Props) {
  const { name, photos, navigation } = props

  const allList = name.map((name2, index) => (
    <View key={index}>
      <View style={{ paddingTop: (20 / 812) * Height }} />
      <View style={{ paddingLeft: (25 / 375) * Width, paddingRight: (25 / 375) * Width }}>
        <View style={styles.flexRowBet}>
          <View style={styles.flexRowblock}>
            <Image source={photos[index]} key={index} style={styles.photo} />
            <View style={{ paddingLeft: (10 / 375) * Width, paddingTop: (10 / 812) * Height }}>
              <Text style={styles.name}>{name2}</Text>
            </View>
          </View>
          <View style={{ paddingTop: (8 / 812) * Height }}>
            <View style={styles.unblock}>
              <View style={{ paddingTop: (5 / 812) * Height }}>
                <Text style={styles.unblockText}>Unblock</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ paddingTop: (21 / 812) * Height }}>
          <View>
            <View style={styles.line} />
          </View>
        </View>
      </View>
    </View>
  ))

  return (
    <View>
      <View style={{ paddingTop: (56 / 812) * Height }}>
        <View style={styles.flexRow}>
          <View style={{ paddingTop: (6 / 812) * Height }}>
            <TouchableOpacity onPress={() => navigation.navigate('PrivacySettings')}>
              <Image source={Images.leftArrowback} style={styles.leftArrow} />
            </TouchableOpacity>
          </View>
          <View style={{ paddingLeft: (65 / 375) * Width }}>
            <Text style={styles.heading}>Blocked Accounts</Text>
          </View>
        </View>
        <View style={{ paddingTop: (31 / 812) * Height }}>
          <View>
            <View style={styles.line} />
          </View>
        </View>
        <View style={{ paddingTop: (9 / 812) * Height }} />
        {allList}
      </View>
    </View>
  )
}

Blocked.defaultProps = {
  name: ['Sean', 'Amanda', 'Laura Lecuona', 'Laura Lecuona'],
  photos: [Images.sean, Images.amanda, Images.trump, Images.amanda]
}
