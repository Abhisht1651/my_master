// @flow

import React, { useState } from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import PropTypes from 'prop-types'
import Images from '../../Themes/Images'
import styles from '../Styles/CheckboxRadioAndToggleStyles/SmallCheckboxStyle'

type Props = {
  onPress: PropTypes.func
}

const SmallCheckbox = (props: Props) => {
  const { onPress } = props
  const [checked, setChecked] = useState(false)

  const onPressHandler = () => {
    setChecked(!checked)
    onPress()
  }
  return (
    <TouchableOpacity style={styles.checkBox} activeOpacity={1} onPress={onPressHandler}>
      {checked && (
        <View style={styles.checkedBox}>
          <Image source={Images.checkmark} style={styles.checkmark} />
        </View>
      )}
    </TouchableOpacity>
  )
}

export default SmallCheckbox
