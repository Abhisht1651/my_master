// @flow

import React from 'react'
import { View } from 'react-native'
import ProgressBar from './ProgressBar'
import styles from '../Styles/ProgreeBarStyles/ProgressStyle'

type Props = {
  count: number
}

const Progress = (props: Props) => {
  const { count } = props
  let progress1 = 'unfilled'
  let progress2 = 'unfilled'
  let progress3 = 'unfilled'
  if (count === 1) {
    progress1 = 'filled'
  } else if (count === 2) {
    progress1 = 'filled'
    progress2 = 'filled'
  } else if (count === 3) {
    progress1 = 'filled'
    progress2 = 'filled'
    progress3 = 'filled'
  }
  return (
    <View style={styles.container}>
      <View style={styles.progressBarContainer}>
        <ProgressBar styleType={progress1} />
        <ProgressBar styleType={progress2} />
        <ProgressBar styleType={progress3} />
      </View>
    </View>
  )
}

export default Progress
