import React from 'react'
import { View, TouchableOpacity } from 'react-native'

// Styles
import styles from '../Styles/IconStyles/BubblesStyles'
import RavenSVG from '../../Images/Icons/Path-1.svg'
import ShareSVG from '../../Images/Icons/Path-3.svg'
import ReactSVG from '../../Images/Icons/Path.svg'

const Bubbles = () => {
  return (
    <View style={styles.cardBox}>
      <TouchableOpacity>
        <View style={styles.profileIconBox}>
          <ShareSVG />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.marginBox}>
        <View style={styles.profileIconBox}>
          <RavenSVG />
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

export default Bubbles
