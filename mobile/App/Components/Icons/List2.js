import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

// Styles
import styles from '../Styles/IconStyles/List2Styles'
import RavenSVG from '../../Images/Icons/Path-1.svg'
import ShareSVG from '../../Images/Icons/Path-3.svg'

const List2 = () => {
  return (
    <View style={styles.cardBox}>
      <TouchableOpacity style={styles.rowBox}>
        <View style={styles.profileIconBox}>
          <ShareSVG />
        </View>
        <View style={styles.TextBox}>
          <Text style={styles.TextStyles}>Share</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.rowBox2}>
        <View style={styles.dimen}>
          <RavenSVG />
        </View>
        <View style={styles.TextBox}>
          <Text style={styles.TextStyles}>Raven</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default List2
