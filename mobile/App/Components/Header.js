// @flow
import React from 'react'
import { Text, Image, View, TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import ProgressBar from './ProgressBar/Progress'

import { Images } from '../Themes'
import styles from './Styles/HeaderStyles'

type Props = {
  container?: StyleSheet,
  onPressBack?: PropTypes.func,
  progressContainer?: StyleSheet,
  count: number,
  onPressRight?: PropTypes.func,
  rightTextStyle?: StyleSheet,
  rightText?: string,
  isProgressBarVisible: boolean
}
const Header = (props: Props) => {
  const {
    container,
    onPressBack,
    progressContainer,
    count,
    onPressRight,
    rightTextStyle,
    rightText,
    isProgressBarVisible
  } = props
  return (
    <View style={[styles.container, container]}>
      <View>
        {onPressBack && (
          <TouchableOpacity onPress={onPressBack}>
            <Image source={Images.leftArrow} style={styles.leftArrow} />
          </TouchableOpacity>
        )}
      </View>
      {isProgressBarVisible && (
        <View style={[styles.progressContainer, progressContainer]}>
          <ProgressBar count={count} />
        </View>
      )}
      <View>
        <TouchableOpacity onPress={onPressRight}>
          <Text style={[styles.rightText, rightTextStyle]}>{rightText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

Header.defaultProps = {
  container: StyleSheet.create({}),
  onPressBack: undefined,
  progressContainer: StyleSheet.create({}),
  onPressRight: () => {},
  rightTextStyle: StyleSheet.create({}),
  rightText: '    ',
  count: 1,
  isProgressBarVisible: true
}

export default Header
