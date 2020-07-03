// @flow

import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import PropTypes from 'prop-types'
import styles from '../Styles/RavenComponentStyles/RavendropdownStyles'
import IconCheckmark from '../../Images/Icons/icon-checkmark-purple.svg'
import { Images } from '../../Themes'

type Props = {
  applyModal: PropTypes.func,
  applyType: PropTypes.func,
  type: string,
  modal: boolean
}

const DropDown2 = (props: Props) => {
  const { type, modal } = props
  const toggleHandler = () => {
    props.applyModal()
  }

  const clickHandler1 = () => {
    if (props.type === 'All') {
      props.applyType('Filter by')
    } else {
      props.applyType('All')
    }
  }

  const clickHandler2 = () => {
    if (props.type === 'Sent') {
      props.applyType('Filter by')
    } else {
      props.applyType('Sent')
    }
  }

  const clickHandler3 = () => {
    if (props.type === 'Received') {
      props.applyType('Filter by')
    } else {
      props.applyType('Received')
    }
  }

  const shadowStyle = {
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowColor: '#1F1F6016',
    shadowOffSet: { width: 0, height: 0 }
  }

  return (
    <View style={modal === false ? styles.container : styles.containerX}>
      <View>
        <TouchableOpacity onPress={() => props.applyModal()}>
          <View style={styles.filtercont}>
            <Text
              style={
                type === 'Filter by'
                  ? styles.timefiltertext
                  : [
                      type === 'All'
                        ? styles.all
                        : [type === 'Sent' ? styles.sent : styles.received]
                    ]
              }>
              {type}
            </Text>
          </View>
          <Image source={Images.filtericon} style={styles.filtericon} />
        </TouchableOpacity>
      </View>
      {modal === true && (
        <View style={[styles.dropDownBody, shadowStyle]}>
          <View style={styles.dropDownHeader}>
            <TouchableOpacity style={styles.headerItem}>
              <Text style={styles.headerText}>Filter by</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleHandler} style={styles.dropDownIcon} activeOpacity={1}>
              <Image source={Images.filtericon} style={styles.filtericonsize} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={clickHandler1} style={styles.dropDownWidth} activeOpacity={1}>
            <View style={styles.listItem}>
              <Text style={styles.itemText}>All</Text>
              <TouchableOpacity style={styles.checkBox}>
                {type === 'All' && (
                  <View style={styles.checkedBox}>
                    <IconCheckmark />
                  </View>
                )}
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={clickHandler2} style={styles.dropDownWidth} activeOpacity={1}>
            <View style={styles.listItem}>
              <Text style={styles.itemText}>Sent</Text>
              <TouchableOpacity style={styles.checkBox}>
                {type === 'Sent' && (
                  <View style={styles.checkedBox}>
                    <IconCheckmark />
                  </View>
                )}
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={clickHandler3} style={styles.dropDownWidth} activeOpacity={1}>
            <View style={styles.listLastItem}>
              <Text style={styles.lastItemText}>Received</Text>
              <TouchableOpacity style={styles.checkBox}>
                {type === 'Received' && (
                  <View style={styles.checkedBox}>
                    <IconCheckmark />
                  </View>
                )}
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

export default DropDown2
