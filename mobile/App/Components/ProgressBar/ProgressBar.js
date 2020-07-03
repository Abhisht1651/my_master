// @flow

import React from 'react'
import { View } from 'react-native'
import styles from '../Styles/ProgreeBarStyles/ProgressBarStyle'

type Props = {
  styleType: string
}

const ProgressBar = (props: Props) => {
  const { styleType } = props
  let style = {}
  if (styleType === 'filled') {
    style = styles.filled
  } else {
    style = styles.unfilled
  }
  return <View style={style} />
}

export default ProgressBar
