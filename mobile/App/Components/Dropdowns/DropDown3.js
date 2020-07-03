// @flow

import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from '../Styles/DropDownStyles/DropDown3Style'
import Elipsis from '../../Images/Icons/icon-elipsis.svg'
import useHooks from './DropDown3Hooks'

type Props = {
  headerTitle: string,
  content: Array<string>,
  getOption: (arg: number) => void,
  zIndex: number
}

const DropDown3 = (props: Props) => {
  const { hidden, clickHandler, toggleHandler, selected } = useHooks()
  const { headerTitle, content, getOption, zIndex } = props

  const shadowStyle = {
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowColor: '#1F1F6016',
    shadowOffSet: { width: 0, height: 0 }
  }

  useEffect(() => {
    getOption(selected)
  }, [selected])

  const list = []
  for (let i = 0; i < content.length; i += 1) {
    if (i !== content.length - 1) {
      list.push(
        <TouchableOpacity
          onPress={() => clickHandler(i)}
          style={styles.dropDownWidth}
          activeOpacity={1}
          key={i}>
          <View style={styles.listItem}>
            <Text style={styles.itemText}>{content[i]}</Text>
          </View>
        </TouchableOpacity>
      )
    } else {
      list.push(
        <TouchableOpacity
          onPress={() => clickHandler(i)}
          style={styles.dropDownWidth}
          activeOpacity={1}
          key={i}>
          <View style={styles.listLastItem}>
            <Text style={styles.lastItemText}>{content[i]}</Text>
          </View>
        </TouchableOpacity>
      )
    }
  }

  return (
    <View style={styles.container} zIndex={zIndex}>
      <TouchableOpacity onPress={toggleHandler} activeOpacity={1} style={styles.iconOnly}>
        <Elipsis />
      </TouchableOpacity>

      {!hidden && (
        <View style={[styles.dropDownBody, shadowStyle]} elevation={4}>
          <View style={styles.dropDownHeader}>
            <View style={styles.headerItem}>
              <Text style={styles.headerText}>{headerTitle}</Text>
            </View>
            <TouchableOpacity onPress={toggleHandler} style={styles.dropDownIcon} activeOpacity={1}>
              <Elipsis />
            </TouchableOpacity>
          </View>
          {list}
        </View>
      )}
    </View>
  )
}

DropDown3.defaultProps = {
  headerTitle: 'Posts',
  content: ['Privacy', 'Edit post', 'Remove post'],
  zIndex: 1
}

export default DropDown3
