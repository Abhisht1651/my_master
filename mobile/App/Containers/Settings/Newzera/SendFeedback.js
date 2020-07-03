// @flow

import React, { useState } from 'react'
import { Text, View, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import { NavigationContainerProps } from '@react-navigation/native'

import { Images } from '../../../Themes'

import styles from './Styles/SendFeedbackStyle'
// import common from './Styles/CommonStyle'

const Width = Dimensions.get('window').width
const Height = Dimensions.get('window').height

type Props = NavigationContainerProps & {}

export default function SendFeedback(props: Props) {
  const { navigation } = props
  const [value, setValue] = useState('')
  const [sendfb, setSendfb] = useState(false)

  const changeTextHandler = (text: string) => {
    if (text !== '') {
      setSendfb(true)
      setValue(text)
    } else {
      setSendfb(false)
      setValue(text)
    }
  }
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
        <View style={{ paddingTop: (41 / 812) * Height }} />
        <View style={{ paddingLeft: (26 / 375) * Width }}>
          <View style={{ width: (299 / 375) * Width }}>
            <Text style={styles.tell}>Tellg us more about how do you feel using our app:</Text>
          </View>
        </View>
        <View style={{ paddingTop: (24 / 812) * Height }} />
        <View style={{ paddingLeft: (26 / 375) * Width }}>
          <TextInput
            style={styles.input}
            placeholder="Add comments about why you are reporting this user,"
            placeholderTextColor="#8F8FAF"
            value={value}
            onChangeText={changeTextHandler}
            multiline
          />
          <View style={{ paddingTop: (213 / 812) * Height }} />
          <View style={sendfb ? styles.sendYes : styles.sendNo}>
            <TouchableOpacity onPress={() => navigation.navigate('SendFeedbackSubmit')}>
              <View style={{ paddingTop: (16 / 812) * Height }}>
                <Text style={styles.submitAgainText}>Send</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}
