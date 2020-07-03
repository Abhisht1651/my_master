// @flow

import React, { useState } from 'react'
import { View, TouchableOpacity } from 'react-native'
import styles from '../Styles/CheckboxRadioAndToggleStyles/RadioButtonStyle'

type Props = {
  onPress: () => {}
}

const RadioButton = (props: Props) => {
  const { onPress } = props

  const [active, setActive] = useState(false)

  const onPressHandler = () => {
    setActive(!active)
    if (!active) onPress()
  }
  return (
    <TouchableOpacity style={styles.circle} onPress={onPressHandler}>
      {active && <View style={styles.checkedCircle} />}
    </TouchableOpacity>
  )
}

export default RadioButton
