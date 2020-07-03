// @flow

import React, { useState } from 'react'
import { View, TouchableWithoutFeedback, Image, Text } from 'react-native'
import PropTypes from 'prop-types'
import Images from '../../Themes/Images'
import styles from '../Styles/RavenComponentStyles/CheckBoxCircularStyles'

type Props = {
  item: {
    name: string,
    source: string,
    id: string,
    source1: string,
    source2: string,
    group: boolean
  },
  lastid: string,
  handleChange: PropTypes.func
}

const CheckBoxCircular = (props: Props) => {
  const { item, lastid, handleChange } = props
  const [value, setValue] = useState(false)

  /* function to show and hide the purple tick */
  const clickHandler = () => {
    setValue(!value)
    handleChange(value, props.item.name)
  }

  return (
    <View>
      <TouchableWithoutFeedback onPress={clickHandler}>
        <View>
          {item.group === true ? (
            <View>
              <Image
                source={item.source1}
                style={item.id === lastid ? styles.lastgrpimg1 : styles.grpimg1}
              />
              <Image source={item.source2} style={styles.grpimg2} />
            </View>
          ) : (
            <Image
              source={item.source}
              style={item.id === lastid ? styles.lastimage : styles.image}
            />
          )}
          <View style={styles.nametext}>
            <Text style={styles.name}>{item.name}</Text>
          </View>
          <View style={styles.checkbox}>
            {value === true && <Image source={Images.checkedmark} style={styles.checkedBox} />}
          </View>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.border} />
    </View>
  )
}

export default CheckBoxCircular
