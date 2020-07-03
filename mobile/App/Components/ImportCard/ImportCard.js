// @flow

import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from '../Styles/ImportCardStyles/ImportCardStyle'
import PhoneIcon from '../../Images/Icons/Icon.svg'

type Props = {
  onPress: () => {}
}

const ImportCard = (props: Props) => {
  const { onPress } = props
  return (
    <TouchableOpacity style={styles.container} activeOpacity={1} onPress={onPress}>
      <View style={styles.upperBlock}>
        <PhoneIcon height="100%" />
      </View>
      <View style={styles.middleBlock} activeOpacity={1}>
        <Text style={styles.middleBlockText}>Import contacts from your phone</Text>
      </View>
      <View style={styles.lastBlock} activeOpacity={1}>
        <Text style={styles.lastBlockText}>Get access to my adresss book</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ImportCard
