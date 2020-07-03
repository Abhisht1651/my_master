// @flow

import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity, Platform } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import styles from '../Styles/ActivityFeedComponentStyles/DropdownActivityStyles'
import Elipsis from '../../Images/Icons/icon-elipsis.svg'

type Props = {
  applytoggle: PropTypes.func,
  delactivity: PropTypes.func,
  hideactivity: PropTypes.func,
  id1: string,
  name1: string,
  hidden: string
}
const DropDown = (props: Props) => {
  const { id1, hidden } = props
  const toggleHandler = () => {
    props.applytoggle(props.id1)
  }
  const clickHandler1 = () => {
    props.hideactivity(props.name1)
  }

  const clickHandler2 = () => {
    props.delactivity(props.id1)
  }

  const shadowStyle = {
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowColor: '#1F1F6016',
    shadowOffSet: { width: 0, height: 0 }
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleHandler} activeOpacity={1} style={styles.iconOnly}>
        <Elipsis />
      </TouchableOpacity>

      {hidden === id1 && (
        <View style={[styles.dropDownBody, shadowStyle]}>
          <View style={styles.dropDownHeader}>
            <TouchableOpacity style={styles.headerItem}>
              <Text style={styles.headerText}>Options</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleHandler} style={styles.dropDownIcon} activeOpacity={1}>
              <Elipsis />
            </TouchableOpacity>
          </View>

          {Platform.OS === 'android' && (
            <TouchableWithoutFeedback
              onPress={clickHandler1}
              style={styles.dropDownWidth}
              activeOpacity={1}>
              <View style={styles.listItem}>
                <Text style={styles.itemText}>Hide activities from this friend</Text>
              </View>
            </TouchableWithoutFeedback>
          )}

          {Platform.OS === 'android' && (
            <TouchableWithoutFeedback
              onPress={clickHandler2}
              style={styles.dropDownWidth}
              activeOpacity={1}>
              <View style={styles.listLastItem}>
                <Text style={styles.itemText}>Delete Activity</Text>
              </View>
            </TouchableWithoutFeedback>
          )}
          {Platform.OS === 'ios' && (
            <TouchableOpacity
              onPress={clickHandler1}
              style={styles.dropDownWidth}
              activeOpacity={1}>
              <View style={styles.listItem}>
                <Text style={styles.itemText}>Hide activities from this friend</Text>
              </View>
            </TouchableOpacity>
          )}

          {Platform.OS === 'ios' && (
            <TouchableOpacity
              onPress={clickHandler2}
              style={styles.dropDownWidth}
              activeOpacity={1}>
              <View style={styles.listLastItem}>
                <Text style={styles.itemText}>Delete Activity</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  )
}

export default DropDown
