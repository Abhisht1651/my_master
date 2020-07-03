import React from 'react'
import { View } from 'react-native'
import styles from '../Styles/CheckboxRadioAndToggleStyles/DisplayScreenStyle'

import Checkbox from './Checkbox'
import SmallCheckbox from './SmallCheckbox'
import RadioButton from './RadioButton'
import Toggle from './Toggle'

const DisplayScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Checkbox onPress={() => console.log('1')} />
      </View>
      <View>
        <SmallCheckbox onPress={() => console.log('2')} />
      </View>
      <View>
        <RadioButton onPress={() => console.log('3')} />
      </View>
      <View>
        <Toggle onPress={() => console.log('4')} />
      </View>
    </View>
  )
}
export default DisplayScreen
