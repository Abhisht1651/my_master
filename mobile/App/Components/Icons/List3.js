import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

// Styles
import styles from '../Styles/IconStyles/List3Styles'
import BoostSVG from '../../Images/Icons/icon-action-boost.svg'
import ShareSVG from '../../Images/Icons/Path-3.svg'

const List3 = () => {
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
        <View style={styles.profileIconBox}>
          <BoostSVG />
        </View>
        <View style={styles.TextBox}>
          <Text style={styles.TextStyles}>Boost</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default List3
