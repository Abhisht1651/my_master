// @flow
import React from 'react'
import { View } from 'react-native'
import styles from '../Styles/TimeFilterStyles/DisplayScreenStyle'

import TimeFilter from './TimeFilter'

const DisplayScreen = () => {
  const captureYears = (arr: Array<string>) => {
    console.log(arr)
  }

  const captureMonths = (arr: Array<string>) => {
    console.log(arr)
  }

  const btnPressHandler = () => {}
  const onCloseHandler = () => {}
  return (
    <View style={styles.container}>
      <TimeFilter
        getSelectedYears={captureYears}
        getSelectedMonths={captureMonths}
        onBtnPress={btnPressHandler}
        onClose={onCloseHandler}
      />
    </View>
  )
}

export default DisplayScreen
