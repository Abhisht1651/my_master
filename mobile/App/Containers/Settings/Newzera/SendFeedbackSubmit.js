// @flow

import React from 'react'
import { Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import { NavigationContainerProps } from '@react-navigation/native'

import { Images } from '../../../Themes'

import styles from './Styles/SendFeedbackStyle'
// import common from './Styles/CommonStyle'

const Width = Dimensions.get('window').width
const Height = Dimensions.get('window').height

type Props = NavigationContainerProps & {}
export default function SendFeedbackSubmit(props: Props) {
  const { navigation } = props
  return (
    <View>
      <View style={{ paddingTop: (56 / 812) * Height }}>
        <View style={styles.flexRow}>
          <View style={{ paddingTop: (6 / 812) * Height }}>
            <TouchableOpacity onPress={() => navigation.navigate('NewzeraSettings')}>
              <Image source={Images.leftArrowback} style={styles.leftArrow} />
            </TouchableOpacity>
          </View>
          <View style={{ paddingLeft: (73.5 / 375) * Width }}>
            <Text style={styles.heading}>Send Feedback</Text>
          </View>
        </View>
        <View style={{ paddingTop: (31 / 812) * Height }}>
          <View>
            <View style={styles.line} />
          </View>
        </View>
        <View style={{ paddingTop: (246 / 812) * Height }} />
        <View style={{ paddingLeft: (38 / 375) * Width, paddingRight: (38 / 375) * Width }}>
          <Text style={styles.feedback}>Thank you for your feedback!</Text>
        </View>
        <View style={{ paddingTop: (31 / 812) * Height }} />
        <View style={{ paddingLeft: (75 / 375) * Width, paddingRight: (75 / 375) * Width }}>
          <View style={styles.submitAgain}>
            <TouchableOpacity onPress={() => navigation.navigate('SendFeedback')}>
              <View style={{ paddingTop: (16 / 812) * Height }}>
                <Text style={styles.submitAgainText}>Submit Again</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}
