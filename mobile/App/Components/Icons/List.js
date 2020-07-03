import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

// Styles
import styles from '../Styles/IconStyles/ListStyles'
import RavenSVG from '../../Images/Icons/Path-1.svg'
import ShareSVG from '../../Images/Icons/Path-3.svg'
import ReactSVG from '../../Images/Icons/Path.svg'

const List = () => {
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

      <TouchableOpacity style={styles.rowBox1}>
        <View style={styles.profileIconBox}>
          <ReactSVG />
        </View>
        <View style={styles.TextBox}>
          <Text style={styles.TextStyles}>React</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default List
