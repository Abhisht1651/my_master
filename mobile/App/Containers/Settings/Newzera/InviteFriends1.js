// @flow

import React from 'react'
import { Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import { NavigationContainerProps } from '@react-navigation/native'

import { Images } from '../../../Themes'

import styles from './Styles/InviteFriendsStyle'
// import common from './Styles/CommonStyle'

const Width = Dimensions.get('window').width
const Height = Dimensions.get('window').height
type Props = NavigationContainerProps & {}

export default function InviteFriends1(props: Props) {
  const { navigation } = props
  return (
    <View>
      <View style={{ paddingTop: (56 / 812) * Height }}>
        <View style={styles.flexRow}>
          <View style={{ paddingTop: (6 / 812) * Height }}>
            <TouchableOpacity onPress={() => navigation.navigate('InviteFriends2')}>
              <Image source={Images.leftArrowback} style={styles.leftArrow} />
            </TouchableOpacity>
          </View>
          <View style={{ paddingLeft: (83 / 375) * Width }}>
            <Text style={styles.heading}>Invite Friends</Text>
          </View>
        </View>
        <View style={{ paddingTop: (31 / 812) * Height }}>
          <View>
            <View style={styles.line} />
          </View>
        </View>
        <View style={{ paddingTop: (238 / 812) * Height }} />
        <View style={{ paddingLeft: (25 / 375) * Width, paddingRight: (25 / 375) * Width }}>
          <View style={styles.container}>
            <View style={styles.upperBlock}>
              <Image
                source={Images.iconImport}
                style={{ height: (60 / 812) * Height, width: (58 / 812) * Height }}
              />
            </View>
            <TouchableOpacity style={styles.middleBlock} activeOpacity={1}>
              <Text style={styles.middleBlockText}>Import contacts from your phone</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.lastBlock} activeOpacity={1}>
              <Text style={styles.lastBlockText}>Get access to my adresss book</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}
