import React from 'react'
import { View, TouchableOpacity } from 'react-native'

// Styles
import styles from '../Styles/IconStyles/Bubbles2Styles'
import ShareSVG from '../../Images/Icons/Path-3.svg'
import ReactSVG from '../../Images/Icons/Path.svg'

const Bubbles2 = () => {
  return (
    <View style={styles.cardBox}>
      <TouchableOpacity>
        <View style={styles.profileIconBox}>
          <ShareSVG />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.marginBox}>
        <View style={styles.profileIconBox}>
          <ReactSVG />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Bubbles2
