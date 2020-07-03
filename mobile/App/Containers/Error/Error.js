// @flow

import React from 'react'
import { Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'

import { NavigationContainerProps } from '@react-navigation/native'
import styles from './ErrorStyle'
import { Images } from '../../Themes'

const Height = Dimensions.get('window').height

type Props = NavigationContainerProps & {}

export default function Error(props: Props) {
  const { navigation } = props
  return (
    <View>
      <View style={{ paddingTop: (105 / 812) * Height }} />
      <View style={styles.flexError}>
        <Text style={styles.oopsText}>Oops! Not Found</Text>
      </View>
      <View style={{ paddingTop: (115.69 / 812) * Height }} />
      <View style={styles.flexError}>
        <Image source={Images.error} style={styles.errorimg} />
      </View>
      <View style={{ paddingTop: (34.67 / 812) * Height }} />
      <View style={styles.flexError}>
        <Text style={styles.text404}>404</Text>
      </View>
      <View style={{ paddingTop: (14 / 812) * Height }} />
      <View style={styles.flexError}>
        <Text style={styles.textlast}>Time Travel much?</Text>
      </View>
      <View style={styles.flexError}>
        <Text style={styles.textlast}>Looks like you’re in the wrong era!</Text>
      </View>
      <View style={{ paddingTop: (113 / 812) * Height }} />
      <View style={styles.flexError}>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <View style={styles.buttonHome}>
            <View style={{ paddingTop: (16 / 812) * Height }}>
              <Text style={styles.buttonText}>Back to home</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}
