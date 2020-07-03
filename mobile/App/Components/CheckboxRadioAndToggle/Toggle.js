// @flow

import React, { useState } from 'react'
import Switch from 'react-native-switch-pro'
import styles from '../Styles/CheckboxRadioAndToggleStyles/ToggleStyle'

type Props = {
  onPress: () => void
}

const Toggle = (props: Props) => {
  const { onPress } = props
  const [active, setActive] = useState(false)

  const toggleSwitch = () => {
    setActive(!active)
    if (!active) onPress()
  }
  return (
    <Switch
      onSyncPress={toggleSwitch}
      value={active}
      circleColorActive="#7B46E4"
      circleColorInactive="#DCDCE9"
      backgroundActive="#F7F7F7"
      backgroundInactive="#F7F7F7"
      style={styles.switch}
    />
  )
}

export default Toggle
