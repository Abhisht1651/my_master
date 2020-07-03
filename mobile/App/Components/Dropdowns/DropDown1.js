// @flow

import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from '../Styles/DropDownStyles/DropDown1Style'
import IconDropDown from '../../Images/Icons/Icon-dropdown.svg'
import useHooks from './DropDown1Hooks'

type Props = {
  getOption: (arg: string) => void
}

const DropDown1 = (props: Props) => {
  const {
    hidden,
    headerText,
    heightStyle,
    option1,
    option2,
    option3,
    option4,
    toggleListHandler,
    listHandler1,
    listHandler2,
    listHandler3,
    listHandler4
  } = useHooks()

  const { getOption } = props

  useEffect(() => {
    getOption(headerText)
  }, [headerText])

  return (
    <View style={[styles.container, heightStyle]}>
      <View style={styles.dropDownHeader}>
        <TouchableOpacity onPress={toggleListHandler} style={styles.firstItem} activeOpacity={1}>
          <Text style={headerText === 'Gender' ? styles.genderText : styles.text}>
            {headerText}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleListHandler} style={styles.toggleArrow} activeOpacity={1}>
          <IconDropDown />
        </TouchableOpacity>
      </View>

      {!hidden && (
        <View style={styles.dropDown}>
          <View style={styles.dropDownBody}>
            <View style={styles.dropDownBodyHeader}>
              <TouchableOpacity onPress={listHandler1} style={styles.firstItem} activeOpacity={1}>
                <Text style={styles.text}>{option1}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={toggleListHandler}
                style={styles.toggleArrow}
                activeOpacity={1}>
                <IconDropDown />
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={listHandler2} activeOpacity={1}>
              <View style={styles.dropDownList}>
                <Text style={styles.text}>{option2}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={listHandler3} activeOpacity={1}>
              <View style={styles.dropDownList}>
                <Text style={styles.text}>{option3}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={listHandler4} activeOpacity={1}>
              <View style={styles.dropDownList}>
                <Text style={styles.text}>{option4}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  )
}

export default DropDown1
