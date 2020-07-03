// @flow

import React from 'react'
import { View } from 'react-native'
import styles from './Styles/TImelineLongStyle'
import { widthPercentageToDP as wp } from '../Themes/ScreenMetrics'

type Props = {
  len: number,
  active: number
}

const timeline = (props: Props) => {
  const { len, active } = props
  const smallDots = (dots) => {
    if (dots < 0) {
      return null
    }
    const arr = []
    for (let i = 0; i < dots; i += 1) {
      arr.push(1)
    }
    const smallDotsWithMarginRight = { ...styles.smallDots, marginRight: wp('0.8%') }
    const dotsElements = arr.map((_, index) => (
      <View
        key={`smallDots${index}`}
        style={index === dots - 1 ? smallDotsWithMarginRight : styles.smallDots}
      />
    ))
    return <View style={styles.smallDotsContainer}>{dotsElements}</View>
  }

  const basic = (num, activeState) => {
    const arr = []
    for (let i = 0; i < num - 1; i += 1) {
      arr.push(1)
    }
    const type1 = arr.map((_, index) => (
      <View key={index} style={styles.type1Container}>
        <View style={index === activeState ? styles.paginationDotActive : styles.paginationDot} />
        <View style={styles.paginationLine} />
      </View>
    ))
    if (num <= 6) {
      return type1
    }
    const type2 = (
      <View style={styles.type2Container}>
        <View style={activeState === 0 ? styles.paginationDotActive : styles.paginationDot} />
        {smallDots(activeState - (activeState < num - 1 ? 4 : 5))}
        {activeState >= 5 ? (
          <View
            style={{
              ...styles.paginationLine,
              width: 43 - (activeState - (activeState < num - 1 ? 2 : 3)) * 4
            }}
          />
        ) : (
          <View style={styles.paginationLine} />
        )}
        <View style={activeState === 1 ? styles.paginationDotActive : styles.paginationDot} />
        <View style={styles.paginationLine} />
        <View style={activeState === 2 ? styles.paginationDotActive : styles.paginationDot} />
        <View style={styles.paginationLine} />
        <View style={activeState === 3 ? styles.paginationDotActive : styles.paginationDot} />
        <View style={styles.paginationLine} />
        <View
          style={
            activeState !== 0 &&
            activeState !== 1 &&
            activeState !== 2 &&
            activeState !== 3 &&
            activeState !== num - 1
              ? styles.paginationDotActive
              : styles.paginationDot
          }
        />
        {activeState < num - 2 ? (
          <View
            style={{
              ...styles.paginationLine,
              width: 43 - (num - 2 - Math.max(5, activeState)) * 4
            }}
          />
        ) : (
          <View style={styles.paginationLine} />
        )}
        {smallDots(num - (activeState > 4 ? 2 : 1) - Math.max(5, activeState))}
      </View>
    )
    return type2
  }
  return (
    <View style={styles.pagination}>
      {basic(len, active)}
      <View style={len - 1 === active ? styles.paginationDotActive : styles.paginationDot} />
    </View>
  )
}

timeline.defaultProps = {
  len: 6,
  active: 0
}

export default timeline
