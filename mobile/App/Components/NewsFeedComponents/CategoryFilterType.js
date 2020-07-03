// @flow
import React, { useState } from 'react'
import { Image, TouchableWithoutFeedback, View, Text } from 'react-native'
import PropTypes from 'prop-types'
import styles from '../Styles/ScrollableFeedComponentStyles/CategoryFilterTypeStyles'
import { Images } from '../../Themes'

type Props = {
  title: string,
  image: Image,
  selected: Array<string>,
  activityChange: PropTypes.func
}

const CategoryFilterType = (props: Props) => {
  const { title, image, selected, activityChange } = props
  const [value, setValue] = useState(!!selected.find((e) => e === title))
  const clickHandler = () => {
    setValue(!value)
    activityChange(value, title)
  }
  return (
    <TouchableWithoutFeedback onPress={clickHandler}>
      <View style={styles.cardItems}>
        <View style={styles.iconContainer}>
          <Image source={image} style={styles.iconStyles} />
        </View>
        <View style={styles.itemText}>
          <Text style={styles.text}>{title}</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <View style={styles.checkBox}>
            {selected.find((e) => e === title) && (
              <View style={styles.checkedBox}>
                <Image source={Images.checkmark} style={styles.checkmark} />
              </View>
            )}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default CategoryFilterType
