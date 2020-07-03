// @flow
import React from 'react'
import { View, ScrollView } from 'react-native'
import CategoryFilterCard from './CategoryFilterCard'
import LocationCard from './LocationCard'
import styles from '../Styles/PopUpStyles/DisplayScreenStyle'
import DeleteAccountCard from './DeleteAccountCard'
import NormalPopUp from './NormalPopUp'

const DisplayScreen = () => {
  const catchOptions = (arr: Array<string>) => {
    console.log(arr)
  }

  const onBtnPress = () => {}
  const onClose = () => {}
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.margin}>
          <CategoryFilterCard getSelectedOptions={catchOptions} />
        </View>
        <View style={styles.margin}>
          <LocationCard onClose={onClose} onBtnPress={onBtnPress} />
        </View>
        <View style={styles.margin}>
          <DeleteAccountCard onClose={onClose} onBtnPress={onBtnPress} />
        </View>
        <View style={styles.margin}>
          <NormalPopUp onClose={onClose} onBtnPress={onBtnPress} />
        </View>
      </View>
    </ScrollView>
  )
}

export default DisplayScreen
