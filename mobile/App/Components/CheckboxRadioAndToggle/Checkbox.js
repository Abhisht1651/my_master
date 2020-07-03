// @flow

import React, { useState } from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import Images from '../../Themes/Images'
import styles from '../Styles/CheckboxRadioAndToggleStyles/CheckboxStyle'

type Props = {
  onPress: () => {}
}

const Checkbox = (props: Props) => {
  const { onPress } = props
  const [checked, setChecked] = useState(false)

  const onPressHandler = () => {
    setChecked(!checked)
    if (!checked) onPress()
  }

  return (
    <TouchableOpacity style={styles.checkBox} onPress={onPressHandler} activeOpacity={1}>
      {checked && (
        <View style={styles.checkedBox}>
          <Image source={Images.checkmark} />
        </View>
      )}
    </TouchableOpacity>
  )
}

export default Checkbox
