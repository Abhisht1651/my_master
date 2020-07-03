// @flow

import React from 'react'
import { Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

import { Images } from '../../../Themes'

import styles from './Styles/DeactivateStyle'
// import common from './Styles/CommonStyle'

const Width = Dimensions.get('window').width
const Height = Dimensions.get('window').height

type Props = {
  toggleHandlerSignOut: PropTypes.func
}

export default function SignOut(props: Props) {
  const { toggleHandlerSignOut } = props
  return (
    <View style={styles.zidx}>
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={styles.closePos}>
            <TouchableOpacity onPress={toggleHandlerSignOut}>
              <Image source={Images.iconClose1} style={styles.close} />
            </TouchableOpacity>
          </View>
          <View style={{ paddingTop: (38 / 812) * Height }} />
          <View style={{ paddingLeft: (62 / 375) * Width, paddingRight: (63 / 375) * Width }}>
            <Text style={styles.headText}>Are you sure you want to sign out?</Text>
          </View>
          <View style={{ paddingTop: (8 / 812) * Height }} />
          <View style={{ paddingLeft: (32 / 375) * Width, paddingRight: (31 / 375) * Width }}>
            <Text style={styles.contText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </Text>
          </View>
          <View style={{ paddingTop: (23 / 812) * Height }} />
          <View style={{ paddingLeft: (23.5 / 375) * Width }}>
            <View style={styles.button}>
              <View style={{ paddingTop: (16 / 812) * Height }}>
                <Text style={styles.continue}>Sign Out</Text>
              </View>
            </View>
          </View>
          <View style={{ paddingTop: (30 / 812) * Height }} />
        </View>
      </View>
    </View>
  )
}

SignOut.defaultProps = {
  toggleHandlerSignOut: () => {}
}
