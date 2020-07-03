// @flow

import React, { useState } from 'react'
import { View, TouchableWithoutFeedback, Image, Text } from 'react-native'
import PropTypes from 'prop-types'
import Images from '../../Themes/Images'
import styles from '../Styles/ActivityFeedComponentStyles/ActivityFilterTypeStyles'

// ActivityFilterType is for getting states of each type of Activity (Helper component for ActivityFilter)

type Props = {
  item: {
    name: string,
    id: string
  },
  activityChange: PropTypes.func,
  selected: Array<string>
}

const ActivityFilterType = (props: Props) => {
  const { item, selected } = props
  const [value, setValue] = useState(!!selected.find((e) => e === item.name))
  /* function to show and hide the purple tick */
  const clickHandler = () => {
    setValue(!value)
    props.activityChange(value, props.item.name)
  }

  return (
    <View>
      <TouchableWithoutFeedback onPress={clickHandler}>
        <View>
          <View style={styles.checkbox}>
            {value === true && <Image source={Images.checkedmark} style={styles.checkedBox} />}
          </View>
          <View style={styles.nametext}>
            <Text style={styles.name}>{item.name}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.border} />
    </View>
  )
}
export default ActivityFilterType
