// @flow

import React from 'react'
import { View, ScrollView } from 'react-native'

import DropDown1 from './DropDown1'
import DropDown2 from './DropDown2'
import DropDown3 from './DropDown3'
import styles from '../Styles/DropDownStyles/DisplayScreenStyle'

const DisplayScreen = () => {
  const selectionHandler = (text) => {
    console.log(text)
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.boxStyle}>
          <View style={styles.dropDownContainer}>
            <DropDown1 getOption={selectionHandler} />
          </View>
        </View>
        <View style={styles.boxStyle}>
          <DropDown2 getOption={selectionHandler} type={2} />
        </View>
        <View style={styles.boxStyle}>
          <DropDown3 getOption={selectionHandler} />
        </View>
      </View>
    </ScrollView>
  )
}

export default DisplayScreen
