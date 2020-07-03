// @flow

import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from '../Styles/DropDownStyles/DropDown2Style'
import IconFilter from '../../Images/Icons/Icon-filter.svg'
import IconCheckmark from '../../Images/Icons/icon-checkmark-purple.svg'
import IconDropDown from '../../Images/Icons/Icon-dropdown.svg'
import useHooks from './DropDown2Hooks'

type Props = {
  headerTitle: string,
  type: number,
  content: Array<string>,
  getOption: (arg: string) => void,
  zIndex: number
}

const DropDown2 = (props: Props) => {
  const { headerTitle, type, content, getOption, zIndex } = props
  const { hidden, selected, toggleHandler, clickHandler } = useHooks()

  useEffect(() => {
    getOption(selected)
  }, [selected])

  const shadowStyle = {
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowColor: '#1F1F6016',
    shadowOffSet: { width: 0, height: 0 }
  }

  const list = []
  for (let i = 0; i < content.length; i += 1) {
    if (i !== content.length - 1) {
      list.push(
        <TouchableOpacity
          onPress={() => clickHandler(i)}
          style={styles.dropDownWidth}
          activeOpacity={1}>
          <View style={styles.listItem}>
            <Text style={styles.itemText}>{content[i]}</Text>
            <TouchableOpacity style={styles.checkBox}>
              {selected === i + 1 && (
                <View style={styles.checkedBox}>
                  <IconCheckmark />
                </View>
              )}
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      )
    } else {
      list.push(
        <TouchableOpacity
          onPress={() => clickHandler(i)}
          style={styles.dropDownWidth}
          activeOpacity={1}>
          <View style={styles.listLastItem}>
            <Text style={styles.lastItemText}>{content[i]}</Text>
            <TouchableOpacity style={styles.checkBox}>
              {selected === i + 1 && (
                <View style={styles.checkedBox}>
                  <IconCheckmark />
                </View>
              )}
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      )
    }
  }

  return (
    <View style={styles.container} zIndex={zIndex}>
      <TouchableOpacity onPress={toggleHandler} style={styles.iconOnly} activeOpacity={1}>
        {type === 1 ? <IconFilter /> : <IconDropDown />}
      </TouchableOpacity>

      {!hidden && (
        <View style={[styles.dropDownBody, shadowStyle]} elevation={4}>
          <View style={styles.dropDownHeader}>
            <TouchableOpacity style={styles.headerItem}>
              <Text style={styles.headerText}>{headerTitle}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleHandler} style={styles.dropDownIcon} activeOpacity={1}>
              {type === 1 ? <IconFilter /> : <IconDropDown />}
            </TouchableOpacity>
          </View>
          {list}
        </View>
      )}
    </View>
  )
}

DropDown2.defaultProps = {
  headerTitle: 'Filter by',
  type: 1,
  content: ['All', 'Sent', 'Received'],
  zIndex: 1
}

export default DropDown2
